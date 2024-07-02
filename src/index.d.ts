export = Phantom;

import type { PhantomNone } from "./Util";

import PhantomArray from "./Array";
import PhantomDictionary from "./Map";
import PhantomSet from "./Set";

declare namespace Phantom {
	export const None: PhantomNone;
	export type None = PhantomNone;

	export {
		PhantomArray as Array,
		PhantomDictionary as Dictionary,
		PhantomSet as Set,
	};
}
