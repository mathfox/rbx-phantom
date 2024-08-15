import PhantomSet from "../../src/Set";

const set = new Set<string | number>();

// Basically we are able to return anything that will be checked for truthiness.
const filteredSet = PhantomSet.filter(set, (item) => {
	if (1 === math.random()) {
		return 3;
	}

	return undefined;
});
