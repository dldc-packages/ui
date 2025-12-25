import { CSSProperties } from "react";

export type TSigil = { className?: string; style?: CSSProperties };

/**
 * Key is a unique identifier to merge, value is the actual class and styles (variables)
 */
export type TSigilStyles = {
  readonly $$css: true | string;
  readonly $$global?: TSigil;
} & {
  readonly [key: string]: TSigil;
};

export type TSigilArray<T> = T | ReadonlyArray<TSigilArray<T>>;

export type TSigilEither = TSigil | TSigilStyles;

export type TSigilAny = TSigilArray<TSigilEither | false | null | void>;

type CacheEntry = [
  classNameChunk: string,
  inlineStyleChunk: CSSProperties,
  definedPropertiesChunk: string[],
  // debugStringChunk: string,
  nextCache: Cache,
];
type Cache = WeakMap<TSigilStyles, CacheEntry>;

const CSS_KEY = "$$css";
const GLOBAL_KEY = "$$global";

const cache: Cache = new WeakMap();
const globalSigilCache = new WeakMap<TSigil, TSigilStyles>();

export function createSigil(className: string, style?: CSSProperties): TSigil {
  return { className, style };
}

export const sigil = sigilInternal as (...sigils: TSigilAny[]) => TSigil;

// ...sigils: TSigilStyles[]
function sigilInternal(): TSigil {
  // Keep track of property commits to the className
  const definedProperties: string[] = [];
  // The className and inline style to build up
  let className = "";
  let inlineStyle: null | CSSProperties = null;

  let nextCache: Cache | null = cache;

  // This way of creating an array from arguments is fastest
  // oxlint-disable-next-line no-new-array
  const sigils: TSigilAny[] = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    sigils[i] = arguments[i];
  }

  // Iterate over styles from last to first
  while (sigils.length > 0) {
    const possibleSigil = sigils.pop();

    // Skip empty items (not the == check to handle undefined && null)
    if (possibleSigil == null || possibleSigil === false) {
      continue;
    }

    // Push nested sigils back onto the stack to be processed
    if (Array.isArray(possibleSigil)) {
      for (let i = 0; i < possibleSigil.length; i++) {
        sigils.push(possibleSigil[i]);
      }
      continue;
    }

    const sigilObj = toSigilObj(possibleSigil as TSigilEither);

    // Process an individual style object
    if (sigilObj.$$css != null) {
      // Class names defined by this object
      let classNameChunk = "";
      // The inline styles defined by this object
      let inlineStyleChunk: CSSProperties = {};

      if (nextCache != null && nextCache.has(sigilObj)) {
        const cacheEntry: CacheEntry = nextCache.get(sigilObj)!;
        // Restore cache
        classNameChunk = cacheEntry[0];
        inlineStyleChunk = cacheEntry[1];
        // Append cached defined properties
        definedProperties.push.apply(definedProperties, cacheEntry[2]);
        // Move down the cache tree
        nextCache = cacheEntry[3];
      } else {
        // The properties defined by this object
        let definedPropertiesChunk: string[] = [];

        // Traverse each property in the sigilObj
        for (const prop in sigilObj) {
          const value = sigilObj[prop]; // here value is TSigil
          if (!value) {
            continue;
          }
          if (prop === CSS_KEY) {
            // Skip debug key for now
            continue;
          }
          if (prop === GLOBAL_KEY) {
            // TODO: Global style
            continue;
          }
          // From here the sigil is a one with linked className and styles
          const sigilClass = value.className;
          const sigilStyles = value.style;
          // Only add to chunks if this property hasn't already been seen
          if (!definedProperties.includes(prop)) {
            definedProperties.push(prop);
            if (nextCache != null) {
              definedPropertiesChunk.push(prop);
            }
            if (sigilClass) {
              classNameChunk += (classNameChunk ? " " : "") + sigilClass;
            }
            if (sigilStyles) {
              Object.assign(inlineStyleChunk, sigilStyles);
            }
          }
        }
        if (nextCache != null) {
          // Create the next WeakMap for this sequence of styles
          const weakMap: Cache = new WeakMap();
          nextCache.set(sigilObj, [
            classNameChunk,
            inlineStyleChunk,
            definedPropertiesChunk,
            // debugString,
            weakMap,
          ]);
          nextCache = weakMap;
        }
      }

      // Update the chunks with data from this object
      if (classNameChunk) {
        // Order of classes in chunks matches property-iteration order of style
        // object. Order of chunks matches passed order of styles from first to
        // last (which we iterate over in reverse).
        className = className
          ? classNameChunk + " " + className
          : classNameChunk;
      }
      if (inlineStyleChunk) {
        inlineStyle = inlineStyle
          ? Object.assign({}, inlineStyle, inlineStyleChunk)
          : inlineStyleChunk;
      }
    } else {
      console.error(
        "merge: encountered a sigil that could not be processed.",
        sigilObj
      );
    }
  }

  return { className, style: inlineStyle ?? undefined };
}

function toSigilObj(sigil: TSigilEither): TSigilStyles {
  if ((sigil as TSigilStyles).$$css != null) {
    return sigil as TSigilStyles;
  }

  if (globalSigilCache.has(sigil as TSigil)) {
    return globalSigilCache.get(sigil as TSigil)!;
  }
  const sigilObj = { $$css: true, $$global: sigil as TSigil } as TSigilStyles;
  globalSigilCache.set(sigil as TSigil, sigilObj);
  return sigilObj;
}
