/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
declare function assign<TObject extends object>(target: TObject, ...sources: readonly object[]): TObject;

export = assign;
