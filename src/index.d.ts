import PhantomArray from "./Array";
import PhantomMap from "./Map";
import None from "./None";
import type PhantomNumber from "./Number";
import PhantomSet from "./Set";
import PhantomShared from "./Shared";
import type PhantomString from "./String";
import PhantomUtil from "./Util";

declare namespace Phantom {
	export {
		PhantomUtil as Util,
		PhantomShared as Shared,
		PhantomSet as Set,
		PhantomArray as Array,
		PhantomMap as Map,
		None,
		PhantomNumber as Number,
		PhantomString as String,
	};
}

export = Phantom;
