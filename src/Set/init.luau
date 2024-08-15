--!strict
--!native

local types = require(script.types)

export type Set<T> = types.Set<T>
export type AnySet = types.AnySet
export type UnknownSet = types.UnknownSet

local PhantomSet = {
    add = require(script.add),
    delete = require(script.delete),
    difference = require(script.difference),
    filter = require(script.filter),
    fromArray = require(script.fromArray),
    has = require(script.has),
    intersection = require(script.intersection),
    isSubset = require(script.isSubset),
    isSuperset = require(script.isSuperset),
    map = require(script.map),
    merge = require(script.merge),
    symmetricDifference = require(script.symmetricDifference),
}

-- Re-exports
PhantomSet.keys = require(script.Parent.Shared.keys)
PhantomSet.values = require(script.Parent.Shared.values)
PhantomSet.entries = require(script.Parent.Shared.entries)
PhantomSet.safeFreeze = require(script.Parent.Shared.safeFreeze)

-- Aliases
PhantomSet.toArray = PhantomSet.keys

local exports = {
    PhantomSet = PhantomSet,
}

return exports
