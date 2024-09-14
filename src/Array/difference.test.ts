import { expect, it } from "@rbxts/jest-globals";
import difference from "./difference";

it("should return the difference between two arrays", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];

	expect(difference(array, otherArray)).toEqual(["world"]);
});

it("should ignore nils in varargs", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];

	expect(difference(array, undefined, undefined, otherArray, undefined, undefined)).toEqual(["world"]);
});

it("should work with multiple arrays", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];
	const anotherArray = ["cat", "dog", "hello", "wtf"];

	expect(difference(array, otherArray, anotherArray)).toEqual(["world"]);
});
