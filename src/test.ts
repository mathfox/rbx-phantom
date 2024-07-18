import { add, deleteFromSet, difference } from "./Set";

const set = new Set() as Set<"kek" | "lol">;

const newSet = add(set, "kek2", "new3");
const otherSet = deleteFromSet(newSet, "new3");

const diff = difference(newSet, otherSet);
