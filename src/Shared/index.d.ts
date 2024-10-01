import { compare, compareArray, compareTable } from "./compare";
import deepClone from "./deepClone";
import { deepCompare, deepCompareArray, deepCompareTable } from "./deepCompare";
import deepEquals from "./deepEquals";
import deepFreeze from "./deepFreeze";
import deepSafeFreeze from "./deepSafeFreeze";
import entries from "./entries";
import keys from "./keys";
import merge from "./merge";
import safeFreeze from "./safeFreeze";
import size from "./size";
import values from "./values";

declare namespace PhantomShared {
	export {
		// compare
		compare,
		compareArray,
		compareTable,
		//

		deepClone,
		// deepCompare
		deepCompare,
		deepCompareArray,
		deepCompareTable,
		//

		deepEquals,
		deepFreeze,
		deepSafeFreeze,
		entries,
		keys,
		merge,
		safeFreeze,
		size,
		values,
	};
}

export = PhantomShared;
