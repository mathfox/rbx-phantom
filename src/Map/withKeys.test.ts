import { expect, it } from "@rbxts/jest-globals";
import withKeys from "./withKeys";

it("should return a new map with the given keys kept", () => {
	const map = new Map([
		["hello", "world"],
		["cat", "meow"],
		["dog", "woof"],
	]);

	expect(withKeys(map, "cat", "dog")).toEqual({
		cat: "meow",
		dog: "woof",
	});
});
