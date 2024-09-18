import { expect, it } from "@rbxts/jest-globals";
import trimEnd from "./trimEnd";

it("should trim strings at the end", () => {
	expect(trimEnd("   Hello world!   ")).toBe("   Hello world!");
});
