--!strict
--!native
--!optimize 2

local types = require(script.types)
local deepCompare = require(script.deepCompare)
local compare = require(script.compare)

export type Table<TKey, TValue> = types.Table<TKey, TValue>
export type AnyTable = types.AnyTable
export type UnknownTable = types.UnknownTable

local exports = {
    compare = compare.compare,
    compareArray = compare.compareArray,
    compareTable = compare.compareTable,

    deepClone = require(script.deepClone),

    deepCompare = deepCompare.deepCompare,
    deepCompareArray = deepCompare.deepCompareArray,
    deepCompareTable = deepCompare.deepCompareTable,

    deepEquals = require(script.deepEquals),
    deepFreeze = require(script.deepFreeze),
    deepSafeFreeze = require(script.deepSafeFreeze),
    entries = require(script.entries),
    keys = require(script.keys),
    merge = require(script.merge),
    safeFreeze = require(script.safeFreeze),
    size = require(script.size),
    values = require(script.values),
}

return exports
