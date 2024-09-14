import PhantomSet from "./Set";
import PhantomShared from "./Shared";
import PhantomUtil from "./Util";

declare namespace Phantom {
	export { PhantomUtil as Util, PhantomShared as Shared, PhantomSet as Set };
}

export = Phantom;
