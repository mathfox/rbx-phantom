--!strict
--!native

local types = require(script.types)

export type Set<T> = types.Set<T>

local exports = {
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
exports.keys = require(script.Parent.Shared.keys)
exports.safeFreeze = require(script.Parent.Shared.safeFreeze)
exports.values = require(script.Parent.Shared.values)

-- Aliases
exports.toArray = exports.keys

return exports
