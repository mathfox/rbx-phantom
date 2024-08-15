--!strict
--!native

local Array = require(script.Array)
local Map = require(script.Map)
local None = require(script.None)
local Set = require(script.Set)

export type Array<T> = Array.Array<T>
export type Map<K, V> = Map.Map<K, V>
export type None = None.None
export type Set<T> = Set.Set<T>

local Phantom = {
    Array = Array.PhantomArray,
    Map = Map.PhantomMap,
    None = None.None,
    Set = Set.PhantomSet,
    Shared = require(script.Shared).PhantomShared,

    strictEqual = require(script.Util).strictEqual,
}

local exports = {
    Phantom = Phantom,
}

return exports
