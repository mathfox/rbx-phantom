import { expect, it } from "@rbxts/jest-globals";
import reverse from "./reverse";

it("should reverse the given array", () => {
	expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});
