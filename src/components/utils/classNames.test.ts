import { classNames } from "./classNames";

describe("classNames", () => {
  it("returns correct class name", () => {
    const TEST_CLASS_NAME = "class1 class2 class3";
    expect(classNames(true ? "success" : "error", TEST_CLASS_NAME)).toBe(
      `success ${TEST_CLASS_NAME}`
    );
  });
});
