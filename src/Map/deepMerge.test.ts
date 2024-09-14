import { expect, it } from "@rbxts/jest-globals";
import deepMerge from "./deepMerge";
import None from "../None";

it("should combine two or more maps, where the last value overrides previous, recursively", () => {
	const map_1 = {
		hello: "roblox",
		goodbye: {
			world: "world",
		},
	};

	const map_2 = {
		goodbye: {
			world: "hello",
		},
	};

	expect(deepMerge(map_1 as unknown as Map<unknown, unknown>, map_2 as unknown as Map<unknown, unknown>)).toStrictEqual(
		{
			hello: "roblox",
			goodbye: {
				world: "hello",
			},
		},
	);
});

it("should ignore nils in varargs", () => {
	expect(
		deepMerge(undefined, undefined, new Map([["hello", "world"]]), undefined, new Map([["panda", "cat"]])),
	).toStrictEqual({
		hello: "world",
		panda: "cat",
	});
});

it("should remove values set to None", () => {
	const map_1 = {
		hello: "roblox",
		goodbye: {
			world: "world",
			hello: "hello",
		},
		world: "world",
	};

	expect(
		deepMerge(
			map_1 as unknown as Map<unknown, unknown>,
			{
				world: None,
				goodbye: {
					hello: None,
				},
			} as unknown as Map<unknown, unknown>,
		),
	).toStrictEqual({
		hello: "roblox",
		goodbye: {
			world: "world",
		},
	});
});
