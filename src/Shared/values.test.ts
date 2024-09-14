import { expect, it } from "@rbxts/jest-globals";
import values from "./values";

it("should work for basic structures", () => {
	expect(values([1, 2, 3])).toStrictEqual([1, 2, 3]);

	expect(
		values({
			key_1: "value_1",
			key_2: "value_2",
		}),
	).toStrictEqual(["value_1", "value_2"]);
});
