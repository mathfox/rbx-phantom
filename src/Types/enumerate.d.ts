// source: https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range/39495173#39495173

export type Enumerate<N extends number, Acc extends [] | [...number[], number] = []> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;
