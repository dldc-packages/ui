import { createVar, CSSProperties, style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { INTERNAL } from "./constants";
import { runtimeCssFactory } from "./runtime";
import { TSigilStyles } from "./sigil";
import {
  TCssFactory,
  TInternalPropertyInfos,
  TInternalPropertyInfosDynamic,
  TProperty,
  TSchemaBase,
  TSchemaOf,
} from "./types";

export function property<Value>(): TProperty<Value> {
  return { [INTERNAL]: {} as Value };
}

function isProperty(obj: any): obj is TProperty<any> {
  return obj && obj[INTERNAL] !== undefined;
}

export interface TPropertyResolver {
  transform: (value: any) => CSSProperties;
  /**
   * Generate the dynamic styles, default: true
   */
  dynamic?: boolean | ((conditions: string[]) => boolean);
  /**
   * Static values to generate classes for, default: [] (none)
   */
  staticValues?: any[] | ((conditions: string[]) => any[]);
}

export type TResolvers = {
  conditions?: Record<string, string>;
  properties?: Record<string, TPropertyResolver>;
  defaultConditions?: string[];
};

export type { TCssFactory, TProperty, TSchemaBase, TSigilStyles };

export function createCss<Schema extends TSchemaBase>(
  schema: Schema,
  resolvers: TResolvers
): TCssFactory<Schema> {
  const unusedConditions = new Set(Object.keys(resolvers.conditions || {}));
  const unusedProperties = new Set(Object.keys(resolvers.properties || {}));

  function processSchemaObject(
    parentConditions: string[] = [],
    obj: TSchemaBase
  ): TSchemaOf<TInternalPropertyInfos> {
    const result: TSchemaOf<TInternalPropertyInfos> = {};
    const resolvedConditions =
      parentConditions.length > 0
        ? parentConditions
        : (resolvers.defaultConditions ?? []);
    for (const key in obj) {
      const value = obj[key];
      // Is a property
      if (isProperty(value)) {
        const config = handleProperty(resolvedConditions, key);
        if (config) {
          result[key] = config;
        }
        continue;
      }
      // Is a nested schema
      result[key] = processSchemaObject(
        [...parentConditions, key],
        value as TSchemaBase
      );
    }
    return result;
  }

  function handleProperty(
    conditions: string[],
    property: string
  ): TInternalPropertyInfos | null {
    const { isDynamic, staticValues, transform } = resolvePropertyConfig(
      conditions,
      property
    );

    if (!isDynamic && staticValues.length === 0) {
      return null;
    }
    // Mark property as used
    unusedProperties.delete(property);
    return [
      createDynamicConfig(isDynamic, conditions, property, transform),
      createStaticValueConfig(conditions, staticValues, transform),
    ];
  }

  function createDynamicConfig(
    isDynamic: boolean,
    conditions: string[],
    property: string,
    transform: (value: any) => CSSProperties
  ): TInternalPropertyInfosDynamic {
    if (!isDynamic) {
      return null;
    }

    const varName = createVar(property);
    const dynamicStyle = stylesWithConditions(conditions, transform(varName));
    return [dynamicStyle, varName];
  }

  function createStaticValueConfig(
    conditions: string[],
    staticValues: any[],
    transform: (value: any) => CSSProperties
  ): Record<string, string> {
    const valueToClassname: Record<string, string> = {};
    for (const value of staticValues) {
      const className = stylesWithConditions(conditions, transform(value));
      valueToClassname[value] = className;
    }
    return valueToClassname;
  }

  function stylesWithConditions(
    conditions: string[],
    baseStyles: CSSProperties
  ) {
    // TODO: handle media queries conditions
    const resolvedConditions = conditions.map((cond) => {
      const selector = resolvers.conditions?.[cond];
      if (!selector) {
        throw new Error(
          `No condition found for "${cond}". Make sure to provide a resolver when calling createCss().`
        );
      }
      unusedConditions.delete(cond);
      if (selector.startsWith("&")) {
        return selector.slice(1);
      }
      return selector;
    });

    if (resolvedConditions.length === 0) {
      return style(baseStyles);
    }

    return style({
      selectors: {
        [`&${resolvedConditions.join("")}`]: baseStyles,
      },
    });
  }

  function resolvePropertyConfig(conditions: string[], property: string) {
    const resolver = resolvers.properties?.[property];
    if (!resolver) {
      throw new Error(
        `No resolver found for property "${property}". Make sure to provide a resolver when calling createCss().`
      );
    }

    const isDynamic =
      typeof resolver.dynamic === "function"
        ? resolver.dynamic(conditions)
        : (resolver.dynamic ?? true);

    const staticValues =
      typeof resolver.staticValues === "function"
        ? resolver.staticValues(conditions)
        : (resolver.staticValues ?? []);

    return { isDynamic, staticValues, transform: resolver.transform };
  }

  const internalSchema = processSchemaObject([], schema);

  const args: Parameters<typeof runtimeCssFactory> = [internalSchema];
  const factoryFn = runtimeCssFactory(...args);

  addFunctionSerializer(factoryFn, {
    importPath: "@dldc/css-engine/runtime",
    importName: "runtimeCssFactory",
    args: args as any, // Trus me bro, it's serializable
  });

  return factoryFn;
}

// export function properties<Properties extends TPropertiesBase>(
//   props: Properties
// ): {
//   [K in keyof Properties]: TInternalProperty<
//     Parameters<Properties[K]["transform"]>[0]
//   >;
// } {
//   const result: Record<keyof Properties, TInternalProperty<any>> = {} as any;
//   for (const key in props) {
//     result[key] = {
//       ...props[key],
//       [INTERNAL]: true,
//     };
//   }
//   return result;
// }

// export type TProperty<Value> = {
//   transform: (value: Value) => CSSProperties;
// };

// export type TInternalProperty<Value> = {
//   [INTERNAL]: true;
//   transform: (value: Value) => CSSProperties;
// };

// export type TPropertiesBase = Record<string, TProperty<any>>;

// -----

// export interface TCssFactoryBuilder<
//   // Properties mapping { background: { value: 'brandColor', transform: (v) => ({ backgroundColor: v }) }, ... }
//   Properties extends TPropertiesBase,
//   // Conditions mapping { _hover: '&:hover', ... }
//   Conditions extends TConditionsBase,
// > {
//   addProperties<const NewProperties extends TNewPropertiesBase<Conditions>>(
//     properties: NewProperties
//   ): TCssFactoryBuilder<Merge<Properties, NewProperties>, Conditions>;
//   addConditions<const NewConditions extends TConditionsBase>(
//     conditions: NewConditions
//   ): TCssFactoryBuilder<Properties, Merge<Conditions, NewConditions>>;

//   build(): TCssFactory<Properties, Conditions>;
// }

// export function createCssFactoryBuilder(): TCssFactoryBuilder<{}, {}> {
//   throw new Error("Not implemented");
// }

// --------------------

// export type TUtility<Values extends Record<string, string>> = {
//   [K in keyof Values]: TSigilStyles;
// };

// export type TUtilityDynamic<Values extends Record<string, string>, T> = {
//   [K in keyof Values]: TSigilStyles;
// } & {
//   raw: TUtilityDynamicFn<T>;
// };

// export type TUtilityDynamicFn<T> = (value: T) => TSigilStyles;

// export interface ITUtilityFactoryStatic {
//   <Values extends Record<string, string>>(
//     property: keyof CSSProperties,
//     values: Values
//   ): TUtility<Values>;
// }

// export function utilityFactory<Values extends Record<string, string>>(
//   property: keyof CSSProperties,
//   values: Values
// ): TUtility<Values> {
//   return utilityFactoryInternal(property, values) as any;
// }

// export function dynamicUtilityFactory<Values extends Record<string, string>, T>(
//   property: keyof CSSProperties,
//   values: Values
// ): TUtilityDynamic<Values, T> {
//   return utilityFactoryInternal(property, values, true) as any;
// }

// export function dynamicOnlyUtilityFactory<T>(
//   property: keyof CSSProperties
// ): TUtilityDynamic<{}, T> {
//   return utilityFactoryInternal(property, [], true) as any;
// }

// function utilityFactoryInternal(
//   property: keyof CSSProperties,
//   values: string[] | Record<string, string>,
//   dynamic: boolean = false
// ): Record<string, TSigilStyles> | TUtilityDynamicFn<any> {
//   const result: Record<string, TSigilStyles> = {};
//   const valuesEntries = Object.entries(values);

//   for (const [key, value] of valuesEntries) {
//     const className = style({ [property]: value });
//     result[key] = { $$css: true, [property]: { className } } as TSigilStyles;
//   }

//   if (!dynamic) {
//     return result;
//   }

//   const valueVar = createVar(property.toString());
//   const dynamicStyle = style({ [property]: valueVar });

//   const args = [property, valueVar, dynamicStyle] as const;
//   const dynamicFn = runtimeUtilityDynamic(...args);

//   addFunctionSerializer(dynamicFn, {
//     importPath: "@dldc/css-engine/runtime",
//     importName: "runtimeUtilityDynamic",
//     args,
//   });

//   return Object.assign(result, { raw: dynamicFn });
// }

// export function createCssFactory<
//   const StaticConfig extends TStaticConfigBase,
//   const Conditions extends TConditionsBase,
// >(
//   staticConfig: StaticConfig,
//   conditions: Conditions
// ): TCssFactory<TCssValues<StaticConfig>, keyof Conditions & string> {
//   // 1. Resolve config
//   const configResolved = staticConfig;
//   // 2. Generate vanilla extract styles
//   const styles = {};
//   // 3. Return function that returns sigil styles
//   const args: Parameters<typeof runtimeCssFactory> = [];
//   const factoryFn = runtimeCssFactory(...args);

//   addFunctionSerializer(factoryFn, {
//     importPath: "@dldc/css-engine/runtime",
//     importName: "runtimeCssFactory",
//     args,
//   });

//   return factoryFn;
// }

// export function cssProperty<const T extends TStaticConfigProperty<any>>(
//   config: T
// ): T {
//   return config;
// }
