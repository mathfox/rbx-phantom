import { expect, it } from "@rbxts/jest-globals";
import removeValues from "./removeValues";

it("should return a new dictionary with the given values removed", () => {
	const map = new Map([
		["hello", "world"],
		["goodbye", "cat"],
		["cat", "meow"],
		["dog", "woof"],
	]);

	expect(removeValues(map, "world")).toEqual({
		goodbye: "cat",
		cat: "meow",
		dog: "woof",
	});
});
