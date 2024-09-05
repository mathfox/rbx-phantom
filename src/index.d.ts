import PhantomArray from "./Array";
import PhantomMap from "./Map";
import None from "./None";
import PhantomSet from "./Set";
import type PhantomShared from "./Shared";
import type PhantomUtil from "./Util";
export * from "./Util";

interface PhantomConstructor {
	Shared: typeof PhantomShared;
	Util: typeof PhantomUtil;
}

declare const Phantom: PhantomConstructor;

export default Phantom;
