import type {
	DeepReadonly,
	DeepReadonlyArray,
	DeepReadonlyMap,
	DeepReadonlyObject,
	DeepReadonlySet,
} from "./DeepReadonly";
import type { Decr, Incr } from "./helpers";
import type { InferKey, InferValue } from "./Infer";
import strictEqual from "./strictEqual";
import type { Tuple } from "./Tuple";

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
