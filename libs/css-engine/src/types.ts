import { INTERNAL } from "./constants";
import { TSigilStyles } from "./sigil";

export interface TSchemaOf<T> {
  [key: string]: T | TSchemaOf<T>;
}

export type TInternalPropertyInfosDynamic =
  | null
  | [classname: string, valueVar: string];

export type TInternalPropertyInfos = [
  dynamicConfig: TInternalPropertyInfosDynamic,
  staticValues: null | Record<string, string>, // value -> classname
];

export type TCssFactory<Schema extends TSchemaBase> = (
  obj: TCompiledSchema<Schema>
) => TSigilStyles;

export type TSchemaBase = TSchemaOf<TProperty<any>>;

export type TCompiledSchema<Schema extends TSchemaBase> = {
  [K in keyof Schema]?: Schema[K] extends TProperty<infer V>
    ? V
    : Schema[K] extends TSchemaBase
      ? TCompiledSchema<Schema[K]>
      : never;
};

export interface TProperty<Value> {
  [INTERNAL]: Value;
}

// import { CSSProperties } from "@vanilla-extract/css";
// import { TSigilStyles } from "./sigil";

// export type TCssFactory<
//   CssValues extends TCssValuesBase,
//   Conditions extends string,
// > = (
//   runtimeConfig: TRuntimeConfig<CssValues>
// ) => TCssFunction<Unpack<TCssObject<CssValues, Conditions>>>;

// export type TCssFunction<CssObject extends TCssValuesBase> = (
//   cssObj: CssObject
// ) => TSigilStyles;

// export type TCssValuesBase = Record<string, any>;

// export type TRuntimeConfigEntry<Value> = {
//   /**
//    * Apply transform before we check if the value is static or dynamic
//    */
//   prepare?: (value: Value) => any;
//   /**
//    * Apply transform before we generate the final CSS
//    */
//   transform?: (value: Value, mode: "static" | "dynamic") => any;
// };

// export type TRuntimeConfig<CssValues = TCssValuesBase> = {
//   properties?: {
//     [K in keyof CssValues]?: TRuntimeConfigEntry<CssValues[K]>;
//   };
// };

// export interface TCssFactoryConfig {}

// export interface TStaticConfigProperty<Value> {
//   key: string;
//   transform: (value: Value) => CSSProperties;
// }

// export type TStaticConfigPropertyType<P extends TStaticConfigProperty<any>> =
//   Parameters<P["transform"]>[0];

// export type TStaticConfigBase = Record<string, TStaticConfigProperty<any>>;

// export type TConditionsBase = Record<string, string>;

// export type TValueStaticWithBracketedDynamic<StaticTypes, DynamicType> =
//   | StaticTypes
//   | `[${DynamicType & string}]`;

// export type TCssValues<Config extends TStaticConfigBase> = {
//   [K in keyof Config]?: TStaticConfigPropertyType<Config[K]>;
// };

// export type TCssObject<
//   CssValues extends TCssValuesBase,
//   Conditions extends string,
// > = CssValues & { [K in Conditions]?: CssValues };

// export type Unpack<T> = {
//   [K in keyof T]: T[K] extends object ? Unpack<T[K]> : T[K];
// };
