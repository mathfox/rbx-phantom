import PhantomShared from "./Shared";
import PhantomUtil from "./Util";

declare namespace Phantom {
	export { PhantomUtil as Util, PhantomShared as Shared };
}

export = Phantom;
