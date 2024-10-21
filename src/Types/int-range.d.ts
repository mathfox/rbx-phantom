// source: https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range/39495173#39495173

import type { Enumerate } from "./enumerate";

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
