import { expect, it } from "@rbxts/jest-globals";
import keys from "./keys";

it("should return 0-based indexes", () => {
	const array = [1, 2, 3];

	expect(keys(array)).toEqual([0, 1, 2]);
});
