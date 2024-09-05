--!strict
--!native

local types = require(script.types)

export type Array<T> = types.Array<T>
export type AnyArray = types.AnyArray
export type UnknownArray = types.UnknownArray

local PhantomArray = {
    at = require(script.at),
    concat = require(script.concat),
    deepEquals = require(script.deepEquals),
    difference = require(script.difference),
    entries = require(script.entries),
    equals = require(script.equals),
    every = require(script.every),
    filter = require(script.filter),
    find = require(script.find),
    findLast = require(script.findLast),
    findWhere = require(script.findWhere),
    findWhereLast = require(script.findWhereLast),
    flatten = require(script.flatten),
    includes = require(script.includes),
    isArray = require(script.isArray),
    keys = require(script.keys),
    map = require(script.map),
    pop = require(script.pop),
    push = require(script.push),
    reduce = require(script.reduce),
    reduceRight = require(script.reduceRight),
    removeIndices = require(script.removeIndices),
    removeValues = require(script.removeValues),
    reverse = require(script.reverse),
    shift = require(script.shift),
    shuffle = require(script.shuffle),
    slice = require(script.slice),
    some = require(script.some),
    symmetricDifference = require(script.symmetricDifference),
    toSet = require(script.toSet),
    unshift = require(script.unshift),
}

-- Re-exports
PhantomArray.deepClone = require(script.Parent.Shared.deepClone)
PhantomArray.safeFreeze = require(script.Parent.Shared.safeFreeze)

-- Aliases
PhantomArray.values = table.clone
PhantomArray.deepCompareArray = require(script.Parent.Shared.deepCompare).deepCompareArray

local exports = {
    PhantomArray = PhantomArray,
}

return exports
