--!strict
--!native
--!optimize 2

local Array = require(script.Array)
local Map = require(script.Map)
local None = require(script.None)
local Set = require(script.Set)
local Shared = require(script.Shared)

export type AnyTable = Shared.AnyTable
export type UnknownTable = Shared.UnknownTable

export type Array<T> = Array.Array<T>
export type AnyArray = Array.AnyArray
export type UnknownArray = Array.UnknownArray

export type Map<K, V> = Map.Map<K, V>
export type AnyMap = Map.AnyMap
export type UnknownMap = Map.UnknownMap

export type Set<T> = Set.Set<T>
export type AnySet = Set.AnySet
export type UnknownSet = Set.UnknownSet

export type None = None.None

local exports = {
    Array = Array,
    Map = Map,
    None = None,
    Set = Set,
    Shared = Shared,

    Util = require(script.Util),
}

return exports
