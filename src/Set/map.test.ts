import { expect, it } from "@rbxts/jest-globals";
import map from "./map";

it("should map a set", () => {
	const set = new Set(["hello", "world"]);

	const newSet = map(set, (value) => `${value}!`);

	expect(newSet).toStrictEqual(new Set(["hello!", "world!"]));
});
