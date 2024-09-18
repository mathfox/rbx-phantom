import { expect, it } from "@rbxts/jest-globals";
import trim from "./trim";

it("should trim strings", () => {
	expect(trim("   Hello world!   ")).toBe("Hello world!");
});
