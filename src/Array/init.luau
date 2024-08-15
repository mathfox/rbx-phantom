--!strict
--!native

local types = require(script.types)

export type Array<T> = types.Array<T>
export type AnyArray = types.AnyArray
export type UnknownArray = types.UnknownArray

local PhantomArray = {
    at = require(script.at),
    concat = require(script.concat),
    difference = require(script.difference),
    differenceSymmetric = require(script.differenceSymmetric),
    equals = require(script.equals),
    every = require(script.every),
    filter = require(script.filter),
    find = require(script.find),
    findLast = require(script.findLast),
    findWhere = require(script.findWhere),
    findWhereLast = require(script.findWhereLast),
    flatten = require(script.flatten),
    includes = require(script.includes),
    insert = require(script.insert),
    isArray = require(script.isArray),
    map = require(script.map),
    pop = require(script.pop),
    push = require(script.push),
    reduce = require(script.reduce),
    reduceRight = require(script.reduceRight),
    removeIndex = require(script.removeIndex),
    removeIndices = require(script.removeIndices),
    removeValue = require(script.removeValue),
    removeValues = require(script.removeValues),
    reverse = require(script.reverse),
    set = require(script.set),
    shift = require(script.shift),
    shuffle = require(script.shuffle),
    slice = require(script.slice),
    some = require(script.some),
    splice = require(script.splice),
    toSet = require(script.toSet),
    unshift = require(script.unshift),
    update = require(script.update),
    zip = require(script.zip),
    zipAll = require(script.zipAll),
}

-- Re-exports
PhantomArray.deepClone = require(script.Parent.Shared.deepClone)
PhantomArray.safeFreeze = require(script.Parent.Shared.safeFreeze)

-- Aliases
PhantomArray.values = table.clone
PhantomArray.deepCompareArray =
    require(script.Parent.Shared.deepCompare).deepCompareArray

local exports = {
    PhantomArray = PhantomArray,
}

return exports
