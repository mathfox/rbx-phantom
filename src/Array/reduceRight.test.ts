import { expect, it } from "@rbxts/jest-globals";
import reduceRight from "./reduceRight";

it("should reduce the given array from the right", () => {
	expect(reduceRight([1, 2, 3], (acc, value) => acc + value, 0)).toBe(6);
});

it("should reduce the given array from the right, using the last element as the initial value", () => {
	expect(reduceRight([1, 2, 3], (acc, value) => acc - value, undefined as unknown as number)).toBe(0);
});

it("should reduce the array from the right, even if the array has a falsy initial value", () => {
	expect(reduceRight([true, false, true], (acc, value) => acc || value, false)).toBe(true);
});
