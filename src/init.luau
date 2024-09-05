--!strict
--!native

local Array = require(script.Array)
local Map = require(script.Map)
local None = require(script.None)
local Set = require(script.Set)
local Shared = require(script.Shared)

export type Array<T> = Array.Array<T>
export type AnyArray = Array.AnyArray
export type UnknownArray = Array.UnknownArray

export type Map<K, V> = Map.Map<K, V>
export type AnyMap = Map.AnyMap
export type UnknownMap = Map.UnknownMap

export type None = None.None

export type Set<T> = Set.Set<T>
export type AnySet = Set.AnySet
export type UnknownSet = Set.UnknownSet

export type AnyTable = Shared.AnyTable
export type UnknownTable = Shared.UnknownTable

local exports = {
    Array = Array.PhantomArray,
    Map = Map.PhantomMap,
    None = None.None,
    Set = Set.PhantomSet,
    Shared = Shared.PhantomShared,

    Util = require(script.Util),
}

return exports
