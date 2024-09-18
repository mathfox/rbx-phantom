import endsWith from "./endsWith";
import startsWith from "./startsWith";
import trim from "./trim";
import trimEnd from "./trimEnd";
import trimStart from "./trimStart";

declare namespace PhantomString {
	export { endsWith, startsWith, trim, trimEnd, trimStart };
}

export = PhantomString;
