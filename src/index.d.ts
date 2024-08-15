import PhantomArray from "./Array";
import PhantomMap from "./Map";
import None from "./None";
import PhantomSet from "./Set";

declare namespace Phantom {
	export { PhantomArray as Array, PhantomMap as Map, PhantomSet as Set, None };
}

export = Phantom;
