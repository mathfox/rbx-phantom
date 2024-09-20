--!strict
--!native
--!optimize 2

local types = require(script.types)

export type Set<T> = types.Set<T>
export type AnySet = types.AnySet
export type UnknownSet = types.UnknownSet

local exports = {
    add = require(script.add),
    delete = require(script.delete),
    difference = require(script.difference),
    filter = require(script.filter),
    fromArray = require(script.fromArray),
    has = require(script.has),
    intersection = require(script.intersection),
    isSet = require(script.isSet),
    isSubset = require(script.isSubset),
    isSuperset = require(script.isSuperset),
    map = require(script.map),
    merge = require(script.merge),
    symmetricDifference = require(script.symmetricDifference),
}

-- Re-exports
exports.keys = require(script.Parent.Shared.keys)
exports.values = require(script.Parent.Shared.values)
exports.entries = require(script.Parent.Shared.entries)
exports.safeFreeze = require(script.Parent.Shared.safeFreeze)

-- Aliases
exports.toArray = exports.keys

return exports
