import { expect, it } from "@rbxts/jest-globals";
import keys from "./keys";

it("should return keys for basic structures", () => {
	expect(
		keys({
			key_1: {},
			key_2: {},
		}),
	).toStrictEqual(["key_1", "key_2"]);

	expect(
		keys(
			new Map([
				["value_1", "test"],
				["value_2", "test"],
			]),
		),
	).toStrictEqual(["value_1", "value_2"]);
});
