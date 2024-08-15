import type {
	DeepReadonly,
	DeepReadonlyMap,
	DeepReadonlyObject,
} from "../../src/Shared";

type NestedMap = Map<
	string,
	{
		other: number;
		someStr: string;
		lastValue: ReadonlyArray<
			[
				{
					veryNested: number;
				},
			]
		>;
	}
>;

type ReadonlyNestedMap = DeepReadonly<NestedMap>;
type ReadonlyNestedMap2 = DeepReadonlyMap<NestedMap>;

type SimpleReadonlyObject = DeepReadonlyObject<{
	other: number;
	someStr: string;
}>;
