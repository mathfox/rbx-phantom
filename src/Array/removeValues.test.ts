import { expect, it } from "@rbxts/jest-globals";
import removeValues from "./removeValues";

it("should remove the elements with the given values", () => {
	expect(removeValues([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 3, 5]);
});
