import { expect, it } from "@rbxts/jest-globals";
import push from "./push";

it("should return an array with new value(s) added", () => {
	expect(push([1, 2, 3], 5)).toEqual([1, 2, 3, 5]);
});
