import { expect, it } from "@rbxts/jest-globals";
import flip from "./flip";

it("should return a flipped map", () => {
	expect(
		flip({
			hello: "world",
		} as unknown as ReadonlyMap<unknown, unknown>),
	).toEqual({
		world: "hello",
	});
});
