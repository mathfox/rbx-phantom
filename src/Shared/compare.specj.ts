import { describe, expect, it } from "@rbxts/jest-globals";
import { compare } from "./compare";

describe("compare", () => {
	it("should compare primitive values", () => {
		expect(compare(1, 1)).toBe(true);

		expect(compare("value", "value")).toBe(true);
	});
});
