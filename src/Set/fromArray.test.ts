import { expect, it } from "@rbxts/jest-globals";
import fromArray from "./fromArray";

it("should create a set from an array", () => {
	const set = fromArray(["hello", "world"]);

	expect(set).toStrictEqual(new Set(["hello", "world"]));
});
