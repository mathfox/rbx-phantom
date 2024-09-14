import PhantomArray from "./Array";
import PhantomMap from "./Map";
import None from "./None";
import PhantomSet from "./Set";
import PhantomShared from "./Shared";
import PhantomUtil from "./Util";

declare namespace Phantom {
	export {
		PhantomUtil as Util,
		PhantomShared as Shared,
		PhantomSet as Set,
		PhantomArray as Array,
		PhantomMap as Map,
		None,
	};
}

export = Phantom;
