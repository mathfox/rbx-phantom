import EPSILON from "./EPSILON";
import MAX_SAFE_INTEGER from "./MAX_SAFE_INTEGER";
import MAX_VALUE from "./MAX_VALUE";
import MIN_SAFE_INTEGER from "./MIN_SAFE_INTEGER";
import MIN_VALUE from "./MIN_VALUE";
import NEGATIVE_INFINITY from "./NEGATIVE_INFINITY";
import NaN from "./NaN";
import POSITIVE_INFINITY from "./POSITIVE_INFINITY";
import isFinite from "./isFinite";
import isInteger from "./isInteger";
import isNaN from "./isNaN";
import isSafeInteger from "./isSafeInteger";

declare namespace PhantomNumber {
	// constants
	export {
		EPSILON,
		MAX_SAFE_INTEGER,
		MAX_VALUE,
		MIN_SAFE_INTEGER,
		MIN_VALUE,
		NaN,
		NEGATIVE_INFINITY,
		POSITIVE_INFINITY,
	};

	// functions
	export { isFinite, isInteger, isNaN, isSafeInteger };
}

export = PhantomNumber;
