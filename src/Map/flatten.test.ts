import { expect, it } from "@rbxts/jest-globals";
import flatten from "./flatten";

it("should return a flattened map", () => {
	expect(
		flatten({
			hello: "world",
			goodbye: {
				yes: "no",
				no: "yes",
			},
		} as unknown as ReadonlyMap<unknown, unknown>),
	).toEqual({
		hello: "world",
		yes: "no",
		no: "yes",
	});
});

it("should not flatten nested maps if depth = 0", () => {
	expect(
		flatten(
			{
				hello: "world",
				goodbye: {
					yes: "no",
					no: "yes",
				},
			} as unknown as ReadonlyMap<unknown, unknown>,
			0,
		),
	).toEqual({
		hello: "world",
		goodbye: {
			yes: "no",
			no: "yes",
		},
	});
});
