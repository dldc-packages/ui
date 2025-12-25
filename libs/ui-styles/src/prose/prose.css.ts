import { colorsVars, opacity } from "@dldc/ui-core/colors";
import {
  createGlobalTheme,
  createTheme,
  globalStyle,
  GlobalStyleRule,
  style,
} from "@vanilla-extract/css";
import { designContentSizeVar } from "../common/index.js";
import { em, rem, round } from "./utils.js";

const isNotProse = `:not(:where([class~="not-prose"],[class~="not-prose"] *))`;

function globalStyleWithNotProse(selector: string, rules: GlobalStyleRule) {
  globalStyle(`:where(${selector})${isNotProse}`, rules);
}

export const proseVars = createGlobalTheme(":root", {
  body: colorsVars.neutral["700"],
  headings: colorsVars.neutral["900"],
  lead: colorsVars.neutral["600"],
  links: colorsVars.neutral["900"],
  bold: colorsVars.neutral["900"],
  counters: colorsVars.neutral["500"],
  bullets: colorsVars.neutral["300"],
  hr: colorsVars.neutral["200"],
  quotes: colorsVars.neutral["900"],
  quoteBorders: colorsVars.neutral["200"],
  captions: colorsVars.neutral["500"],
  kbd: colorsVars.neutral["900"],
  kbdShadows: opacity(colorsVars.neutral["900"], 10),
  code: colorsVars.neutral["900"],
  preCode: colorsVars.neutral["200"],
  preBg: colorsVars.neutral["800"],
  thBorders: colorsVars.neutral["300"],
  tdBorders: colorsVars.neutral["200"],
});

export const notProseClass = style({});

export const proseBaseClass = style({});

globalStyleWithNotProse(`${proseBaseClass}`, {
  color: proseVars.body,
  maxWidth: "65ch",
});

globalStyleWithNotProse(`${proseBaseClass} [class~="lead"]`, {
  color: proseVars.lead,
});
globalStyleWithNotProse(`${proseBaseClass} a`, {
  color: proseVars.links,
  textDecoration: "underline",
  fontWeight: "500",
});
globalStyleWithNotProse(`${proseBaseClass} strong`, {
  color: proseVars.bold,
  fontWeight: "600",
});
globalStyleWithNotProse(`${proseBaseClass} a strong`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} blockquote strong`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} thead th strong`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} ol`, {
  listStyleType: "decimal",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="A"]`, {
  listStyleType: "upper-alpha",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="a"]`, {
  listStyleType: "lower-alpha",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="A" s]`, {
  listStyleType: "upper-alpha",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="a" s]`, {
  listStyleType: "lower-alpha",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="I"]`, {
  listStyleType: "upper-roman",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="i"]`, {
  listStyleType: "lower-roman",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="I" s]`, {
  listStyleType: "upper-roman",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="i" s]`, {
  listStyleType: "lower-roman",
});
globalStyleWithNotProse(`${proseBaseClass} ol[type="1"]`, {
  listStyleType: "decimal",
});
globalStyleWithNotProse(`${proseBaseClass} ul`, {
  listStyleType: "disc",
});
globalStyleWithNotProse(`${proseBaseClass} ol > li::marker`, {
  fontWeight: "400",
  color: proseVars.counters,
});
globalStyleWithNotProse(`${proseBaseClass} ul > li::marker`, {
  color: proseVars.bullets,
});
globalStyleWithNotProse(`${proseBaseClass} dt`, {
  color: proseVars.headings,
  fontWeight: "600",
});
globalStyleWithNotProse(`${proseBaseClass} hr`, {
  borderColor: proseVars.hr,
  borderTopWidth: "1px",
});
globalStyleWithNotProse(`${proseBaseClass} blockquote`, {
  fontWeight: "500",
  fontStyle: "italic",
  color: proseVars.quotes,
  borderInlineStartWidth: "0.25rem",
  borderInlineStartColor: proseVars.quoteBorders,
  quotes: '"\\201C""\\201D""\\2018""\\2019"',
});
globalStyleWithNotProse(
  `${proseBaseClass} blockquote p:first-of-type::before`,
  {
    content: "open-quote",
  }
);
globalStyleWithNotProse(`${proseBaseClass} blockquote p:last-of-type::after`, {
  content: "close-quote",
});
globalStyleWithNotProse(`${proseBaseClass} h1`, {
  color: proseVars.headings,
  fontWeight: "800",
});
globalStyleWithNotProse(`${proseBaseClass} h1 strong`, {
  fontWeight: "900",
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h2`, {
  color: proseVars.headings,
  fontWeight: "700",
});
globalStyleWithNotProse(`${proseBaseClass} h2 strong`, {
  fontWeight: "800",
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h3`, {
  color: proseVars.headings,
  fontWeight: "600",
});
globalStyleWithNotProse(`${proseBaseClass} h3 strong`, {
  fontWeight: "700",
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h4`, {
  color: proseVars.headings,
  fontWeight: "600",
});
globalStyleWithNotProse(`${proseBaseClass} h4 strong`, {
  fontWeight: "700",
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} picture`, {
  display: "block",
});
globalStyleWithNotProse(`${proseBaseClass} kbd`, {
  fontWeight: "500",
  fontFamily: "inherit",
  color: proseVars.kbd,
  boxShadow: `0 0 0 1px ${proseVars.kbdShadows}, 0 3px 0 ${proseVars.kbdShadows}`,
});
globalStyleWithNotProse(`${proseBaseClass} code`, {
  color: proseVars.code,
  fontWeight: "600",
});
globalStyleWithNotProse(`${proseBaseClass} code::before`, {
  content: '"`"',
});
globalStyleWithNotProse(`${proseBaseClass} code::after`, {
  content: '"`"',
});
globalStyleWithNotProse(`${proseBaseClass} a code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h1 code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h2 code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h3 code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} h4 code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} blockquote code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} thead th code`, {
  color: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} pre`, {
  color: proseVars.preCode,
  backgroundColor: proseVars.preBg,
  overflowX: "auto",
  fontWeight: "400",
});
globalStyleWithNotProse(`${proseBaseClass} pre code`, {
  backgroundColor: "transparent",
  borderWidth: "0",
  borderRadius: "0",
  padding: "0",
  fontWeight: "inherit",
  color: "inherit",
  fontSize: "inherit",
  fontFamily: "inherit",
  lineHeight: "inherit",
});
globalStyleWithNotProse(`${proseBaseClass} pre code::before`, {
  content: "none",
});
globalStyleWithNotProse(`${proseBaseClass} pre code::after`, {
  content: "none",
});
globalStyleWithNotProse(`${proseBaseClass} table`, {
  width: "100%",
  tableLayout: "auto",
  marginTop: em(32, 16),
  marginBottom: em(32, 16),
});
globalStyleWithNotProse(`${proseBaseClass} thead`, {
  borderBottomWidth: "1px",
  borderBottomColor: proseVars.thBorders,
});
globalStyleWithNotProse(`${proseBaseClass} thead th`, {
  color: proseVars.headings,
  fontWeight: "600",
  verticalAlign: "bottom",
});
globalStyleWithNotProse(`${proseBaseClass} tbody tr`, {
  borderBottomWidth: "1px",
  borderBottomColor: proseVars.tdBorders,
});
globalStyleWithNotProse(`${proseBaseClass} tbody tr:last-child`, {
  borderBottomWidth: "0",
});
globalStyleWithNotProse(`${proseBaseClass} tbody td`, {
  verticalAlign: "baseline",
});
globalStyleWithNotProse(`${proseBaseClass} tfoot`, {
  borderTopWidth: "1px",
  borderTopColor: proseVars.thBorders,
});
globalStyleWithNotProse(`${proseBaseClass} tfoot td`, {
  verticalAlign: "top",
});
globalStyleWithNotProse(`${proseBaseClass} th, ${proseBaseClass} td`, {
  textAlign: "start",
});
globalStyleWithNotProse(`${proseBaseClass} figcaption`, {
  color: proseVars.captions,
});

export const proseSizeDynamicClass = style({
  fontSize: `calc(${designContentSizeVar} * (1 / 1.75))`,
  lineHeight: round(24 / 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} p`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} blockquote`, {
  marginTop: em(24, 18),
  marginBottom: em(24, 18),
  paddingInlineStart: em(20, 18),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h1`, {
  fontSize: em(30, 14),
  marginTop: "0",
  marginBottom: em(24, 30),
  lineHeight: round(36 / 30),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h2`, {
  fontSize: em(20, 14),
  marginTop: em(32, 20),
  marginBottom: em(16, 20),
  lineHeight: round(28 / 20),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h3`, {
  fontSize: em(18, 14),
  marginTop: em(28, 18),
  marginBottom: em(8, 18),
  lineHeight: round(28 / 18),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h4`, {
  marginTop: em(20, 14),
  marginBottom: em(8, 14),
  lineHeight: round(20 / 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} img`, {
  marginTop: em(24, 14),
  marginBottom: em(24, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} picture`, {
  marginTop: em(24, 14),
  marginBottom: em(24, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} picture > img`, {
  marginTop: "0",
  marginBottom: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} video`, {
  marginTop: em(24, 14),
  marginBottom: em(24, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} kbd`, {
  fontSize: em(12, 14),
  borderRadius: rem(5),
  paddingTop: em(2, 14),
  paddingInlineEnd: em(5, 14),
  paddingBottom: em(2, 14),
  paddingInlineStart: em(5, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} code`, {
  fontSize: em(12, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h2 code`, {
  fontSize: em(18, 20),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h3 code`, {
  fontSize: em(16, 18),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} pre`, {
  fontSize: em(12, 14),
  lineHeight: round(20 / 12),
  marginTop: em(20, 12),
  marginBottom: em(20, 12),
  borderRadius: rem(4),
  paddingTop: em(8, 12),
  paddingInlineEnd: em(12, 12),
  paddingBottom: em(8, 12),
  paddingInlineStart: em(12, 12),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} ol`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
  paddingInlineStart: em(20, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} ul`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
  paddingInlineStart: em(20, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} li`, {
  marginTop: em(4, 14),
  marginBottom: em(4, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} ol > li`, {
  paddingInlineStart: em(6, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} ul > li`, {
  paddingInlineStart: em(6, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > ul > li p`, {
  marginTop: em(8, 14),
  marginBottom: em(8, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > ul > li > p:first-child`, {
  marginTop: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > ul > li > p:last-child`, {
  marginBottom: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > ol > li > p:first-child`, {
  marginTop: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > ol > li > p:last-child`, {
  marginBottom: em(16, 14),
});
globalStyleWithNotProse(
  `${proseSizeDynamicClass} ul ul, ${proseSizeDynamicClass} ul ol, ${proseSizeDynamicClass} ol ul, ${proseSizeDynamicClass} ol ol`,
  {
    marginTop: em(8, 14),
    marginBottom: em(8, 14),
  }
);
globalStyleWithNotProse(`${proseSizeDynamicClass} dl`, {
  marginTop: em(16, 14),
  marginBottom: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} dt`, {
  marginTop: em(16, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} dd`, {
  marginTop: em(4, 14),
  paddingInlineStart: em(20, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} hr`, {
  marginTop: em(40, 14),
  marginBottom: em(40, 14),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} hr + *`, {
  marginTop: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h2 + *`, {
  marginTop: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h3 + *`, {
  marginTop: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} h4 + *`, {
  marginTop: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} table`, {
  fontSize: em(12, 14),
  lineHeight: round(18 / 12),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} thead th`, {
  paddingInlineEnd: em(12, 12),
  paddingBottom: em(8, 12),
  paddingInlineStart: em(12, 12),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} thead th:first-child`, {
  paddingInlineStart: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} thead th:last-child`, {
  paddingInlineEnd: "0",
});
globalStyleWithNotProse(
  `${proseSizeDynamicClass} tbody td, ${proseSizeDynamicClass} tfoot td`,
  {
    paddingTop: em(8, 12),
    paddingInlineEnd: em(12, 12),
    paddingBottom: em(8, 12),
    paddingInlineStart: em(12, 12),
  }
);
globalStyleWithNotProse(
  `${proseSizeDynamicClass} tbody td:first-child, ${proseSizeDynamicClass} tfoot td:first-child`,
  {
    paddingInlineStart: "0",
  }
);
globalStyleWithNotProse(
  `${proseSizeDynamicClass} tbody td:last-child, ${proseSizeDynamicClass} tfoot td:last-child`,
  {
    paddingInlineEnd: "0",
  }
);
globalStyleWithNotProse(`${proseSizeDynamicClass} figure`, {
  marginTop: em(16, 12),
  marginBottom: em(16, 12),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} figure > *`, {
  marginTop: "0",
  marginBottom: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} figcaption`, {
  fontSize: em(12, 14),
  lineHeight: round(16 / 12),
  marginTop: em(8, 12),
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > :first-child`, {
  marginTop: "0",
});
globalStyleWithNotProse(`${proseSizeDynamicClass} > :last-child`, {
  marginBottom: "0",
});

export const proseColor = {
  slate: createTheme(proseVars, {
    body: colorsVars.slate["700"],
    headings: colorsVars.slate["900"],
    lead: colorsVars.slate["600"],
    links: colorsVars.slate["900"],
    bold: colorsVars.slate["900"],
    counters: colorsVars.slate["500"],
    bullets: colorsVars.slate["300"],
    hr: colorsVars.slate["200"],
    quotes: colorsVars.slate["900"],
    quoteBorders: colorsVars.slate["200"],
    captions: colorsVars.slate["500"],
    kbd: colorsVars.slate["900"],
    kbdShadows: opacity(colorsVars.slate["900"], 10),
    code: colorsVars.slate["900"],
    preCode: colorsVars.slate["200"],
    preBg: colorsVars.slate["800"],
    thBorders: colorsVars.slate["300"],
    tdBorders: colorsVars.slate["200"],
  }),
  gray: createTheme(proseVars, {
    body: colorsVars.gray["700"],
    headings: colorsVars.gray["900"],
    lead: colorsVars.gray["600"],
    links: colorsVars.gray["900"],
    bold: colorsVars.gray["900"],
    counters: colorsVars.gray["500"],
    bullets: colorsVars.gray["300"],
    hr: colorsVars.gray["200"],
    quotes: colorsVars.gray["900"],
    quoteBorders: colorsVars.gray["200"],
    captions: colorsVars.gray["500"],
    kbd: colorsVars.gray["900"],
    kbdShadows: opacity(colorsVars.gray["900"], 10),
    code: colorsVars.gray["900"],
    preCode: colorsVars.gray["200"],
    preBg: colorsVars.gray["800"],
    thBorders: colorsVars.gray["300"],
    tdBorders: colorsVars.gray["200"],
  }),
  zinc: createTheme(proseVars, {
    body: colorsVars.zinc["700"],
    headings: colorsVars.zinc["900"],
    lead: colorsVars.zinc["600"],
    links: colorsVars.zinc["900"],
    bold: colorsVars.zinc["900"],
    counters: colorsVars.zinc["500"],
    bullets: colorsVars.zinc["300"],
    hr: colorsVars.zinc["200"],
    quotes: colorsVars.zinc["900"],
    quoteBorders: colorsVars.zinc["200"],
    captions: colorsVars.zinc["500"],
    kbd: colorsVars.zinc["900"],
    kbdShadows: opacity(colorsVars.zinc["900"], 10),
    code: colorsVars.zinc["900"],
    preCode: colorsVars.zinc["200"],
    preBg: colorsVars.zinc["800"],
    thBorders: colorsVars.zinc["300"],
    tdBorders: colorsVars.zinc["200"],
  }),
  neutral: createTheme(proseVars, {
    body: colorsVars.neutral["700"],
    headings: colorsVars.neutral["900"],
    lead: colorsVars.neutral["600"],
    links: colorsVars.neutral["900"],
    bold: colorsVars.neutral["900"],
    counters: colorsVars.neutral["500"],
    bullets: colorsVars.neutral["300"],
    hr: colorsVars.neutral["200"],
    quotes: colorsVars.neutral["900"],
    quoteBorders: colorsVars.neutral["200"],
    captions: colorsVars.neutral["500"],
    kbd: colorsVars.neutral["900"],
    kbdShadows: opacity(colorsVars.neutral["900"], 10),
    code: colorsVars.neutral["900"],
    preCode: colorsVars.neutral["200"],
    preBg: colorsVars.neutral["800"],
    thBorders: colorsVars.neutral["300"],
    tdBorders: colorsVars.neutral["200"],
  }),
  stone: createTheme(proseVars, {
    body: colorsVars.stone["700"],
    headings: colorsVars.stone["900"],
    lead: colorsVars.stone["600"],
    links: colorsVars.stone["900"],
    bold: colorsVars.stone["900"],
    counters: colorsVars.stone["500"],
    bullets: colorsVars.stone["300"],
    hr: colorsVars.stone["200"],
    quotes: colorsVars.stone["900"],
    quoteBorders: colorsVars.stone["200"],
    captions: colorsVars.stone["500"],
    kbd: colorsVars.stone["900"],
    kbdShadows: opacity(colorsVars.stone["900"], 10),
    code: colorsVars.stone["900"],
    preCode: colorsVars.stone["200"],
    preBg: colorsVars.stone["800"],
    thBorders: colorsVars.stone["300"],
    tdBorders: colorsVars.stone["200"],
  }),
};

export const proseColorInvert = {
  slate: createTheme(proseVars, {
    body: colorsVars.slate["300"],
    headings: colorsVars.white,
    lead: colorsVars.slate["400"],
    links: colorsVars.white,
    bold: colorsVars.white,
    counters: colorsVars.slate["500"],
    bullets: colorsVars.slate["600"],
    hr: colorsVars.slate["700"],
    quotes: colorsVars.white,
    quoteBorders: colorsVars.slate["700"],
    captions: colorsVars.slate["500"],
    kbd: colorsVars.white,
    kbdShadows: opacity(colorsVars.white, 10),
    code: colorsVars.white,
    preCode: colorsVars.slate["300"],
    preBg: "rgb(0 0 0 / 50%)",
    thBorders: colorsVars.slate["600"],
    tdBorders: colorsVars.slate["700"],
  }),
  gray: createTheme(proseVars, {
    body: colorsVars.gray["300"],
    headings: colorsVars.white,
    lead: colorsVars.gray["400"],
    links: colorsVars.white,
    bold: colorsVars.white,
    counters: colorsVars.gray["500"],
    bullets: colorsVars.gray["600"],
    hr: colorsVars.gray["700"],
    quotes: colorsVars.white,
    quoteBorders: colorsVars.gray["700"],
    captions: colorsVars.gray["500"],
    kbd: colorsVars.white,
    kbdShadows: opacity(colorsVars.white, 10),
    code: colorsVars.white,
    preCode: colorsVars.gray["300"],
    preBg: "rgb(0 0 0 / 50%)",
    thBorders: colorsVars.gray["600"],
    tdBorders: colorsVars.gray["700"],
  }),
  zinc: createTheme(proseVars, {
    //       "--prose-invert-body": "{colors.zinc.300}",
    // "--prose-invert-headings": "{colors.white}",
    // "--prose-invert-lead": "{colors.zinc.400}",
    // "--prose-invert-links": "{colors.white}",
    // "--prose-invert-bold": "{colors.white}",
    // "--prose-invert-counters": "{colors.zinc.400}",
    // "--prose-invert-bullets": "{colors.zinc.600}",
    // "--prose-invert-hr": "{colors.zinc.700}",
    // "--prose-invert-quotes": "{colors.zinc.100}",
    // "--prose-invert-quote-borders": "{colors.zinc.700}",
    // "--prose-invert-captions": "{colors.zinc.400}",
    // "--prose-invert-kbd": "{colors.white}",
    // "--prose-invert-kbd-shadows": "{colors.white/10}",
    // "--prose-invert-code": "{colors.white}",
    // "--prose-invert-pre-code": "{colors.zinc.300}",
    // "--prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
    // "--prose-invert-th-borders": "{colors.zinc.600}",
    // "--prose-invert-td-borders": "{colors.zinc.700}",
    body: colorsVars.zinc["300"],
    headings: colorsVars.white,
    lead: colorsVars.zinc["400"],
    links: colorsVars.white,
    bold: colorsVars.white,
    counters: colorsVars.zinc["500"],
    bullets: colorsVars.zinc["600"],
    hr: colorsVars.zinc["700"],
    quotes: colorsVars.white,
    quoteBorders: colorsVars.zinc["700"],
    captions: colorsVars.zinc["500"],
    kbd: colorsVars.white,
    kbdShadows: opacity(colorsVars.white, 10),
    code: colorsVars.white,
    preCode: colorsVars.zinc["300"],
    preBg: "rgb(0 0 0 / 50%)",
    thBorders: colorsVars.zinc["600"],
    tdBorders: colorsVars.zinc["700"],
  }),
  neutral: createTheme(proseVars, {
    body: colorsVars.neutral["300"],
    headings: colorsVars.white,
    lead: colorsVars.neutral["400"],
    links: colorsVars.white,
    bold: colorsVars.white,
    counters: colorsVars.neutral["500"],
    bullets: colorsVars.neutral["600"],
    hr: colorsVars.neutral["700"],
    quotes: colorsVars.white,
    quoteBorders: colorsVars.neutral["700"],
    captions: colorsVars.neutral["500"],
    kbd: colorsVars.white,
    kbdShadows: opacity(colorsVars.white, 10),
    code: colorsVars.white,
    preCode: colorsVars.neutral["300"],
    preBg: "rgb(0 0 0 / 50%)",
    thBorders: colorsVars.neutral["600"],
    tdBorders: colorsVars.neutral["700"],
  }),
  stone: createTheme(proseVars, {
    body: colorsVars.stone["300"],
    headings: colorsVars.white,
    lead: colorsVars.stone["400"],
    links: colorsVars.white,
    bold: colorsVars.white,
    counters: colorsVars.stone["500"],
    bullets: colorsVars.stone["600"],
    hr: colorsVars.stone["700"],
    quotes: colorsVars.white,
    quoteBorders: colorsVars.stone["700"],
    captions: colorsVars.stone["500"],
    kbd: colorsVars.white,
    kbdShadows: opacity(colorsVars.white, 10),
    code: colorsVars.white,
    preCode: colorsVars.stone["300"],
    preBg: "rgb(0 0 0 / 50%)",
    thBorders: colorsVars.stone["600"],
    tdBorders: colorsVars.stone["700"],
  }),
};
