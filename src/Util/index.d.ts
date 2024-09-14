import type {
	DeepReadonly,
	DeepReadonlyArray,
	DeepReadonlyMap,
	DeepReadonlyObject,
	DeepReadonlySet,
} from "./DeepReadonly";
import type { InferKey, InferValue } from "./Infer";
import type { Tuple } from "./Tuple";
import type { Decr, Incr } from "./helpers";
import strictEqual from "./strictEqual";

declare namespace PhantomUtil {
	export type {
		DeepReadonly,
		DeepReadonlyObject,
		DeepReadonlyArray,
		DeepReadonlyMap,
		DeepReadonlySet,
		Incr,
		Decr,
		Tuple,
		InferKey,
		InferValue,
	};

	export { strictEqual };
}

export = PhantomUtil;
