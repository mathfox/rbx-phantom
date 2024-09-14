import { expect, it } from "@rbxts/jest-globals";
import keys from "./keys";

it("should return keys for object", () => {
	const value = keys({
		key_1: {},
		key_2: {},
	});

	expect(value.size()).toBe(2);
	expect(value).toContain("key_1");
	expect(value).toContain("key_2");
});

it("should return keys for maps", () => {
	const value = keys(
		new Map([
			["value_1", "test"],
			["value_2", "test"],
		]),
	);

	expect(value.size()).toBe(2);
	expect(value).toContain("value_1");
	expect(value).toContain("value_2");
});
