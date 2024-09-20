import { expect, it } from "@rbxts/jest-globals";
import isMap from "./isMap";

it("should return true if the value is a map", () => {
	expect(isMap(new Map())).toBe(true);
});

it("should return true for empty tables", () => {
	expect(isMap([])).toBe(true);

	expect(isMap(new Set())).toBe(true);

	expect(isMap({})).toBe(true);
});

it("should return true for Number-keyed maps", () => {
	expect(
		isMap(
			new Map([
				[0, "value"],
				[1, "value"],
				[2, "vaue"],
			]),
		),
	).toBe(true);
});
