import { expect, it } from "@rbxts/jest-globals";
import delete_ from "./delete";

it("should delete a value from a set", () => {
	const set = new Set(["hello"]);

	expect(delete_(set, "hello").has("hello")).toBe(false);
});

it("should filter out the nils", () => {
	const set = new Set(["hello", "world"]);

	expect(delete_(set, "hello", undefined, "world")).toStrictEqual(new Set());
});
