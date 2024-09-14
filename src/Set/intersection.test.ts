import { expect, it } from "@rbxts/jest-globals";
import intersection from "./intersection";

it("should return the intersection of two sets", () => {
	const set_1 = new Set(["hello", "world"]);
	const set_2 = new Set(["world", "cat"]);

	expect(intersection(set_1, set_2)).toStrictEqual(new Set(["world"]));
});

it("should ignore the nils in varargs", () => {
	const set_1 = new Set(["hello", "world"]);
	const set_2 = new Set(["world", "cat"]);

	expect(intersection(undefined, undefined, set_1, undefined, set_2, undefined)).toStrictEqual(new Set(["world"]));
});
