import { expect, test } from "vitest";
import { createSigil, sigil, TSigilStyles } from "../src/sigil";

function createTestSigil(props: Record<string, string>): TSigilStyles {
  const sigilObj = { $$css: true } as TSigilStyles;
  for (const key in props) {
    (sigilObj as any)[key] = createSigil(props[key] as string, {
      [("--" + key + "-var") as string]: props[key] + "-value",
    });
  }
  return sigilObj;
}

test("sigil: merges class names and style correctly", () => {
  const sigil1 = sigil(
    createTestSigil({ color: "color-class" }),
    createTestSigil({ width: "width-class" })
  );

  expect(sigil1).toEqual({
    className: "color-class width-class",
    style: {
      ["--color-var" as string]: "color-class-value",
      ["--width-var" as string]: "width-class-value",
    },
  });
});

test("sigil: merges with multiple property", () => {
  const sigil1 = sigil(
    createTestSigil({ color: "color-class", width: "width-class" }),
    createTestSigil({ width: "width-class-2" })
  );

  expect(sigil1).toEqual({
    className: "color-class width-class-2",
    style: {
      ["--color-var" as string]: "color-class-value",
      ["--width-var" as string]: "width-class-2-value",
    },
  });
});

test("sigil: does not merge skipped style properties", () => {
  const sigil1 = sigil(
    {
      $$css: true,
      color: createSigil("color-class", {
        ["--color-var" as string]: "color-value",
      }),
      width: createSigil("width-class-1", {
        ["--width-var-1" as string]: "200px",
      }),
    },
    {
      $$css: true,
      width: createSigil("width-class-2", {
        ["--width-var-2" as string]: "100px",
      }),
    }
  );

  expect(sigil1).toEqual({
    className: "color-class width-class-2",
    style: {
      ["--color-var" as string]: "color-value",
      ["--width-var-2" as string]: "100px",
    },
  });
});

test("skip null and undefined sigils", () => {
  const sigil1 = sigil(null, undefined, {
    $$css: true,
    color: createSigil("color-class", {
      ["--color-var" as string]: "color-value",
    }),
  });

  expect(sigil1).toEqual({
    className: "color-class",
    style: {
      ["--color-var" as string]: "color-value",
    },
  });
});

test("merge nested arrays of sigils", () => {});
