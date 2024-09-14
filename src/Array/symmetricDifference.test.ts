import { expect, it } from "@rbxts/jest-globals";
import symmetricDifference from "./symmetricDifference";

it("should return the symmetric difference between two arrays", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];

	const diff = symmetricDifference(array, otherArray);

	expect(diff.size()).toBe(3);
	expect(diff).toContain("world");
	expect(diff).toContain("cat");
	expect(diff).toContain("dog");
});

it("should ignore nils in varargs", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];

	const diff = symmetricDifference(array, undefined, undefined, otherArray, undefined, undefined);

	expect(diff.size()).toBe(3);
	expect(diff).toContain("world");
	expect(diff).toContain("cat");
	expect(diff).toContain("dog");
});

it("should accept multiple arrays", () => {
	const array = ["hello", "world"];
	const otherArray = ["cat", "dog", "hello"];
	const anotherArray = ["hello", "panda"];

	const diff = symmetricDifference(array, otherArray, anotherArray);

	expect(diff.size()).toBe(4);
	expect(diff).toContain("world");
	expect(diff).toContain("cat");
	expect(diff).toContain("dog");
	expect(diff).toContain("panda");
});
