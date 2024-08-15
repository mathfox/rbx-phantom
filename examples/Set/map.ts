import PhantomSet from "../../src/Set";

const value = PhantomSet.map(new Set<number>(), (value) => {
	return tostring(value);
});
