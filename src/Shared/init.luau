--!strict
--!native

local types = require(script.types)
local deepCompare = require(script.deepCompare)
local compare = require(script.compare)

export type AnyTable = types.AnyTable
export type UnknownTable = types.UnknownTable

local PhantomShared = {
    compare = compare.compare,
    compareArray = compare.compareArray,
    deepClone = require(script.deepClone),
    deepCompare = deepCompare.deepCompare,
    deepCompareArray = deepCompare.deepCompareArray,
    deepEquals = require(script.deepEquals),
    deepFreeze = require(script.deepFreeze),
    deepSafeFreeze = require(script.deepSafeFreeze),
    entries = require(script.entries),
    keys = require(script.keys),
    safeFreeze = require(script.safeFreeze),
    size = require(script.size),
    values = require(script.values),
}

local exports = {
    PhantomShared = PhantomShared,
}

return exports
