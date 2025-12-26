import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";

OverlayScrollbars.plugin(ClickScrollPlugin);

export {
  OverlayScrollbarsComponent as Scrollbars,
  useOverlayScrollbars as useScrollbars,
  type UseOverlayScrollbarsInitialization as ScrollbarsInitialization,
  type UseOverlayScrollbarsInstance as ScrollbarsInstance,
  type UseOverlayScrollbarsParams as ScrollbarsParams,
  type OverlayScrollbarsComponentProps as ScrollbarsProps,
  type OverlayScrollbarsComponentRef as ScrollbarsRef,
} from "overlayscrollbars-react";
