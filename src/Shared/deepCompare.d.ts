export function deepCompare(...values: ReadonlyArray<unknown>): boolean;

export function deepCompareArray(...arrays: ReadonlyArray<ReadonlyArray<unknown>>): boolean;

export function deepCompareTable(...maps: ReadonlyArray<ReadonlyMap<unknown, unknown>>): boolean;
