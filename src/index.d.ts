import PhantomArray from "./Array";
import PhantomMap from "./Map";
import None from "./None";
import PhantomNumber from "./Number";
import PhantomObject from "./Object";
import PhantomSet from "./Set";
import PhantomShared from "./Shared";
import PhantomString from "./String";
import PhantomUtil from "./Util";

declare namespace Phantom {
	export {
		PhantomArray as Array,
		PhantomMap as Map,
		None,
		PhantomNumber as Number,
		PhantomObject as Object,
		PhantomSet as Set,
		PhantomShared as Shared,
		PhantomString as String,
		PhantomUtil as Util,
	};
}

export = Phantom;
