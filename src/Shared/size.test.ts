import { expect, it } from "@rbxts/jest-globals";
import size from "./size";

it("should work for basic structures", () => {
	expect(size({})).toBe(0);

	expect(size(new Map([["key_1", "value_1"]]))).toBe(1);

	expect(size(new Set(["value_1", "value_2"]))).toBe(2);
});
