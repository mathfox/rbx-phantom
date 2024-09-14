import { expect, it } from "@rbxts/jest-globals";
import entries from "./entries";

it("should return valid entries for arrays", () => {
	const value = entries(["test", "value"]);

	expect(value).toEqual([
		[0, "test"],
		[1, "value"],
	]);
});
