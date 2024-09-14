import { expect, it } from "@rbxts/jest-globals";
import safeFreeze from "./safeFreeze";

it("should safely freeze the table", () => {
	expect(() => {
		const array = table.freeze([1, 2, 3]);

		safeFreeze(array);
	}).never.toThrow();
});
