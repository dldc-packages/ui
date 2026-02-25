import { describe, expect, test } from "vitest";

import * as builder from "./builder";
import * as create from "./create";
import { serialize } from "./serialize";

describe("add", () => {
  test("throws with no items", () => {
    expect(() => builder.add()).toThrow("Expected at least one item.");
  });

  test("adds numbers", () => {
    const result = builder.add(1, 2, 3);
    expect(serialize(result!)).toBe("calc(1 + 2 + 3)");
  });

  test("adds dimensions with mixed sources", () => {
    const sum = create.clacSum(create.calcValue.dimension(10, "px"), ["+", create.calcValue.number(2)]);
    const result = builder.add("5px", sum, create.calcValue.dimension(3, "px"));
    expect(serialize(result!)).toBe("calc(5px + 10px + 2 + 3px)");
  });

  test("merges calc sum operands", () => {
    const sum = create.clacSum(
      create.calcValue.number(1),
      ["+", create.calcValue.number(2)],
      ["-", create.calcValue.number(3)],
    );
    const result = builder.add(sum, 4);
    expect(serialize(result!)).toBe("calc(1 + 2 - 3 + 4)");
  });

  test("unwraps calc", () => {
    const inner = create.calc(create.clacSum(create.calcValue.number(1), ["+", create.calcValue.number(2)]));
    const result = builder.add(inner, 3);
    expect(serialize(result!)).toBe("calc(1 + 2 + 3)");
  });
});

describe("substract", () => {
  test("throws with no items", () => {
    expect(() => builder.substract()).toThrow("Expected at least one item.");
  });

  test("substracts numbers", () => {
    const result = builder.substract(10, 2, 3);
    expect(serialize(result!)).toBe("calc(10 - 2 - 3)");
  });

  test("merges calc sum operands with subtraction", () => {
    const sum = create.clacSum(
      create.calcValue.number(5),
      ["+", create.calcValue.number(2)],
      ["-", create.calcValue.number(1)],
    );
    const result = builder.substract(10, sum);
    expect(serialize(result!)).toBe("calc(10 - 5 - 2 + 1)");
  });

  test("unwraps calc", () => {
    const inner = create.calc(create.clacSum(create.calcValue.number(7), ["-", create.calcValue.number(2)]));
    const result = builder.substract(inner, 1);
    expect(serialize(result!)).toBe("calc(7 - 2 - 1)");
  });
});

describe("multiply", () => {
  test("throws with no items", () => {
    expect(() => builder.multiply()).toThrow("Expected at least one item.");
  });

  test("multiplies numbers", () => {
    const result = builder.multiply(2, 3, 4);
    expect(serialize(result!)).toBe("calc(2*3*4)");
  });

  test("merges calc product operands", () => {
    const product = create.calcProduct(
      create.calcValue.number(2),
      ["*", create.calcValue.number(3)],
      ["/", create.calcValue.number(4)],
    );
    const result = builder.multiply(product, 5);
    expect(serialize(result!)).toBe("calc(2*3/4*5)");
  });

  test("wraps calc sum in group", () => {
    const sum = create.clacSum(create.calcValue.number(10), ["+", create.calcValue.number(2)]);
    const result = builder.multiply(sum, 2);
    expect(serialize(result!)).toBe("calc((10 + 2)*2)");
  });

  test("unwraps calc", () => {
    const inner = create.calc(create.calcProduct(create.calcValue.number(6), ["*", create.calcValue.number(2)]));
    const result = builder.multiply(inner, 3);
    expect(serialize(result!)).toBe("calc(6*2*3)");
  });
});

describe("divide", () => {
  test("throws with no items", () => {
    expect(() => builder.divide()).toThrow("Expected at least one item.");
  });

  test("divides numbers", () => {
    const result = builder.divide(100, 2, 5);
    expect(serialize(result!)).toBe("calc(100/2/5)");
  });

  test("merges calc product operands", () => {
    const product = create.calcProduct(create.calcValue.number(8), ["/", create.calcValue.number(2)]);
    const result = builder.divide(product, 4);
    expect(serialize(result!)).toBe("calc(8/2/4)");
  });

  test("wraps calc sum in group", () => {
    const sum = create.clacSum(create.calcValue.number(9), ["-", create.calcValue.number(3)]);
    const result = builder.divide(sum, 3);
    expect(serialize(result!)).toBe("calc((9 - 3)/3)");
  });
});

describe("min", () => {
  test("throws with no items", () => {
    expect(() => builder.min()).toThrow("Expected at least one item.");
  });

  test("accepts numbers and strings", () => {
    const result = builder.min(10, "20px", "50%");
    expect(serialize(result!)).toBe("min(10,20px,50%)");
  });

  test("unwraps calc", () => {
    const calc = create.calc(create.clacSum(create.calcValue.number(5), ["+", create.calcValue.number(1)]));
    const result = builder.min(calc, 2);
    expect(serialize(result!)).toBe("min(5 + 1,2)");
  });
});

describe("max", () => {
  test("throws with no items", () => {
    expect(() => builder.max()).toThrow("Expected at least one item.");
  });

  test("accepts numbers and strings", () => {
    const result = builder.max(10, "20px", "50%");
    expect(serialize(result!)).toBe("max(10,20px,50%)");
  });

  test("unwraps calc", () => {
    const calc = create.calc(create.clacSum(create.calcValue.number(5), ["-", create.calcValue.number(1)]));
    const result = builder.max(calc, 2);
    expect(serialize(result!)).toBe("max(5 - 1,2)");
  });
});

describe("clamp", () => {
  test("supports numbers and strings", () => {
    const result = builder.clamp(10, "50%", "100px");
    expect(serialize(result!)).toBe("clamp(10,50%,100px)");
  });

  test("supports none keywords", () => {
    const result = builder.clamp("none", "50%", "none");
    expect(serialize(result!)).toBe("clamp(none,50%,none)");
  });

  test("unwraps calc", () => {
    const minCalc = create.calc(create.clacSum(create.calcValue.number(5), ["+", create.calcValue.number(1)]));
    const maxCalc = create.calc(create.clacSum(create.calcValue.number(10), ["-", create.calcValue.number(2)]));
    const result = builder.clamp(minCalc, 7, maxCalc);
    expect(serialize(result!)).toBe("clamp(5 + 1,7,10 - 2)");
  });
});

describe("exp", () => {
  test("throws for null item", () => {
    expect(() => builder.exp(null)).toThrow("Expected at least one item.");
  });

  test("wraps numbers and strings", () => {
    const result = builder.exp("2.5");
    expect(serialize(result!)).toBe("exp(2.5)");
  });

  test("unwraps calc", () => {
    const calc = create.calc(create.clacSum(create.calcValue.number(2), ["+", create.calcValue.number(1)]));
    const result = builder.exp(calc);
    expect(serialize(result!)).toBe("exp(2 + 1)");
  });
});

describe("value", () => {
  test("parses number strings", () => {
    expect(serialize(builder.value("12.5"))).toBe("12.5");
  });

  test("parses percentages", () => {
    expect(serialize(builder.value("50%"))).toBe("50%");
  });

  test("parses dimensions", () => {
    expect(serialize(builder.value("10px"))).toBe("10px");
  });

  test("keeps raw values", () => {
    expect(serialize(builder.value("var(--size)"))).toBe("var(--size)");
  });
});
