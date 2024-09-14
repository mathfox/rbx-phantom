import { expect, it } from "@rbxts/jest-globals";
import filter from "./filter";

it("should return a copy of the given map with only the elements that match the predicate", () => {
	const map = new Map([
		["hello", "world"],
		["goodbye", "goodbye"],
	]);

	expect(filter(map, (value) => value === "world")).toEqual({
		hello: "world",
	});
});
