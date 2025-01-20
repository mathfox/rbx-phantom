/*
Contributors:
    - Ivan Leontev (mathfox227@gmail.com)

Revision History:
    - 06/10/2024 Ivan Leontev - Created.
    - 14/10/2024 Ivan Leontev - Renamed `InferObjectKey` to `InferKey` and `InferObjectValue` to `InferValue`.
    - 05/01/2025 Ivan Leontev - Added documentation comments. Formatted the types.
*/

/**
 * Infers the key of any built-in data structure.
 */
export type InferKey<TInput>     = TInput extends ReadonlyArray<any>                 ? number
	                             : TInput extends ReadonlyMap<infer TKey, any>       ? TKey
		                         : TInput extends ReadonlySet<infer TKey>            ? TKey
                                 : TInput extends object                             ? keyof TInput
                                 : never

/**
 * Infers the value of any built-in data data structure.
 */
export type InferValue<TInput>   = TInput extends ReadonlyArray<infer TValue>        ? TValue
	                             : TInput extends ReadonlyMap<any, infer TValue>     ? TValue
		                         : TInput extends ReadonlySet<any>                   ? true
	                             : TInput extends object                             ? TInput[keyof TInput]
			                     : never

