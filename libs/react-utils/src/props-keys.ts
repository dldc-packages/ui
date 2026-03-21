import { keysOfType } from "@dldc/utils/keys-of-type";
import { UnionToIntersection } from "type-fest";

const PROPS_TYPE = Symbol.for("INTERNAL_PROPS_TYPE");

export type BaseRecord = Record<string, any>;

export interface TPropsKeys<Out> {
  readonly keys: readonly string[];
  readonly [PROPS_TYPE]: Out;
}

export interface TMergedPropsKeys<Props extends TAnyPropsKeysList> extends TPropsKeys<TypeofPropsKeysLIst<Props>> {
  readonly content: Props;
}

export type TAnyPropsKeys = TPropsKeys<any>;
export type TAnyMergedPropsKeys = TMergedPropsKeys<any>;
export type TAnyPropsKeysList = readonly TAnyPropsKeys[];

export type TypeOfPropsKeys<Props extends TAnyPropsKeys> = Props[typeof PROPS_TYPE];

export type TypeofPropsKeysLIst<PropsList extends TAnyPropsKeysList> = UnionToIntersection<
  PropsList[number][typeof PROPS_TYPE]
>;

export function createPropsKeys<Props>(obj: Record<keyof Props, null>): TPropsKeys<Props> {
  const KEYS = keysOfType<Props>(obj);
  return {
    keys: KEYS as readonly string[],
    [PROPS_TYPE]: null as any,
  };
}

export function mergePropsKeys<const PropsList extends TAnyPropsKeysList>(
  ...propsList: PropsList
): TMergedPropsKeys<PropsList> {
  const keys = new Set<string>();
  propsList.forEach((propsKeys) => {
    propsKeys.keys.forEach((key) => {
      if (keys.has(key)) {
        throw new Error(`Duplicate key "${key}" found in props splitters`);
      }
      keys.add(key);
    });
  });
  return {
    keys: Array.from(keys),
    [PROPS_TYPE]: null as any,
    content: propsList,
  };
}

export type TExtractBase = TAnyPropsKeys | TAnyPropsKeysList;

export type TExtractedPropsResult<PropsKeys extends TExtractBase> = PropsKeys extends TAnyPropsKeys
  ? PropsKeys[typeof PROPS_TYPE]
  : { [K in keyof PropsKeys]: PropsKeys[K] extends TAnyPropsKeys ? TypeOfPropsKeys<PropsKeys[K]> : never };

export function extractProps<Props extends BaseRecord, PropsKeys extends TExtractBase>(
  inProps: Props,
  propsKeys: PropsKeys,
): [extracted: TExtractedPropsResult<PropsKeys>, rest: Omit<Props, keyof TExtractedPropsResult<PropsKeys>>] {
  const extracted: any[] = [];
  const rest: BaseRecord = { ...inProps };
  const propsList: TAnyPropsKeysList = Array.isArray(propsKeys) ? propsKeys : [propsKeys];

  propsList.forEach((propsKeys) => {
    const splitResult: BaseRecord = {};
    propsKeys.keys.forEach((key) => {
      if (key in rest) {
        splitResult[key] = rest[key];
        delete rest[key];
      }
    });
    extracted.push(splitResult);
  });
  if (Array.isArray(propsKeys)) {
    return [extracted as any, rest as any];
  }
  return [extracted[0] as any, rest as any];
}
