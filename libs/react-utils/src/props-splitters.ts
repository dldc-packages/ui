import { keysOfType } from "@dldc/utils/keys-of-type";
import { UnionToIntersection } from "type-fest";

const SPLITTER_TYPE = Symbol.for("INTERNAL_PROPS_SPLITTER_TYPE");

export type BaseRecord = Record<string, any>;

export type TPropsSplitter<Out> = {
  readonly keys: readonly string[];
  readonly [SPLITTER_TYPE]: Out;
};

export type TAnySplitter = TPropsSplitter<any>;
export type TAnySplitters = readonly TAnySplitter[];

export function createProps<Props>(obj: Record<keyof Props, null>): TPropsSplitter<Props> {
  const KEYS = keysOfType<Props>(obj);
  return {
    keys: KEYS as readonly string[],
    [SPLITTER_TYPE]: null as any,
  };
}

export function mergeProps<const Splitters extends TAnySplitters>(...splitters: Splitters): Splitters {
  const keys = new Set<string>();
  splitters.forEach((splitter) => {
    splitter.keys.forEach((key) => {
      if (keys.has(key)) {
        throw new Error(`Duplicate key "${key}" found in props splitters`);
      }
      keys.add(key);
    });
  });
  return splitters;
}

export type TPropsSplittersTypes<Splitters extends TAnySplitters> = UnionToIntersection<
  Splitters[number][typeof SPLITTER_TYPE]
>;

export function extractProps<Props extends BaseRecord, Splitters extends TAnySplitters>(
  props: Props,
  splitters: Splitters,
): [
  extracted: { [K in keyof Splitters]: Splitters[K][typeof SPLITTER_TYPE] },
  rest: Omit<Props, keyof TPropsSplittersTypes<Splitters>>,
] {
  const extracted: any[] = [];
  const rest: BaseRecord = { ...props };
  splitters.forEach((splitter) => {
    const splitResult: BaseRecord = {};
    splitter.keys.forEach((key) => {
      if (key in rest) {
        splitResult[key] = rest[key];
        delete rest[key];
      }
    });
    extracted.push(splitResult);
  });
  return [extracted as any, rest as any];
}

export function extractAllProps<Props extends BaseRecord, Splitters extends TAnySplitters>(
  props: Props,
  splitters: Splitters,
): [extracted: TPropsSplittersTypes<Splitters>, rest: Omit<Props, keyof TPropsSplittersTypes<Splitters>>] {
  const extracted: BaseRecord = {};
  const rest: BaseRecord = { ...props };
  splitters.forEach((splitter) => {
    splitter.keys.forEach((key) => {
      if (key in rest) {
        extracted[key] = rest[key];
        delete rest[key];
      }
    });
  });
  return [extracted as any, rest as any];
}
