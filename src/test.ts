import PhantomSet from "./Set";
import { size, values } from "./Shared";

const value = new Set<string>() as Set<"kek" | "Lol">;

const deleted = PhantomSet.delete(value, "Lol");
