--!strict
--!native
--!optimize 2

local types = require(script.types)

export type Map<K, V> = types.Map<K, V>
export type AnyMap = types.AnyMap
export type UnknownMap = types.UnknownMap

local exports = {
    deepEquals = require(script.deepEquals),
    deepMerge = require(script.deepMerge),
    equals = require(script.equals),
    every = require(script.every),
    filter = require(script.filter),
    flatten = require(script.flatten),
    flip = require(script.flip),
    fromArrays = require(script.fromArrays),
    fromEntries = require(script.fromEntries),
    has = require(script.has),
    includes = require(script.includes),
    isMap = require(script.isMap),
    map = require(script.map),
    merge = require(script.merge),
    removeKeys = require(script.removeKeys),
    removeValues = require(script.removeValues),
    some = require(script.some),
    withKeys = require(script.withKeys),
}

-- Re-exports
exports.keys = require(script.Parent.Shared.keys)
exports.values = require(script.Parent.Shared.values)
exports.entries = require(script.Parent.Shared.entries)

return exports
