import { expect, it } from "@rbxts/jest-globals";
import removeIndices from "./removeIndices";

it("should remove the elements at the given indices", () => {
	expect(removeIndices([1, 2, 3, 4, 5], 1, 3)).toEqual([1, 3, 5]);
});

it("should remove indices at given negative indices", () => {
	expect(removeIndices([1, 2, 3, 4, 5], -1, -3)).toEqual([1, 2, 4]);
});
