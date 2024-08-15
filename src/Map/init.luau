--!strict
--!native

local types = require(script.types)

export type Map<K, V> = types.Map<K, V>
export type AnyMap = types.AnyMap
export type UnknownMap = types.UnknownMap

local PhantomMap = {
    copyDeep = require(script.copyDeep),
    entries = require(script.entries),
    equals = require(script.equals),
    equalsDeep = require(script.equalsDeep),
    every = require(script.every),
    filter = require(script.filter),
    flatten = require(script.flatten),
    flip = require(script.flip),
    freezeDeep = require(script.freezeDeep),
    fromArrays = require(script.fromArrays),
    fromEntries = require(script.fromEntries),
    has = require(script.has),
    includes = require(script.includes),
    map = require(script.map),
    merge = require(script.merge),
    mergeDeep = require(script.mergeDeep),
    removeKey = require(script.removeKey),
    removeKeys = require(script.removeKeys),
    removeValue = require(script.removeValue),
    removeValues = require(script.removeValues),
    set = require(script.set),
    some = require(script.some),
    update = require(script.update),
    withKeys = require(script.withKeys),
}

-- Re-exports
PhantomMap.keys = require(script.Parent.Shared.keys)
PhantomMap.values = require(script.Parent.Shared.values)

local exports = {
    PhantomMap = PhantomMap,
}

return exports
