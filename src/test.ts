import { at, concat } from "./Array";

const value = ["kek", "lol"] as const;

const newValue = concat(
	["kek", "lol"],
	["other", "else", "bob"],
	["other", "else"],
);
