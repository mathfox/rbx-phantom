import { expect, it } from "@rbxts/jest-globals";
import trimStart from "./trimStart";

it("should trim strings at the start", () => {
	expect(trimStart("   Hello world!   ")).toBe("Hello world!   ");
});
