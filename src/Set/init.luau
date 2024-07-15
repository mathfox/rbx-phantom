--!strict

local types = require(script.types)

export type Set<T> = types.Set<T>

local exports = {
    add = require(script.add),
    delete = require(script.delete),

    keys = require(script.keys),
    difference = require(script.difference),
    differenceSymmetric = require(script.differenceSymmetric),
    filter = require(script.filter),
    has = require(script.has),
    intersection = require(script.intersection),
    isSubset = require(script.isSubset),
    isSuperset = require(script.isSuperset),
    map = require(script.map),
    merge = require(script.merge),

    toArray = require(script.toArray),
    fromArray = require(script.fromArray),

    freeze = table.freeze,
}

table.freeze(exports)

return exports
