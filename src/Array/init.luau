--!strict

local types = require(script.types)

export type Array<T> = types.Array<T>

local exports = {
    at = require(script.at),
    concat = require(script.concat),
    concatDeep = require(script.concatDeep),
    copyDeep = require(script.copyDeep),
    difference = require(script.difference),
    differenceSymmetric = require(script.differenceSymmetric),
    equals = require(script.equals),
    equalsDeep = require(script.equalsDeep),
    every = require(script.every),
    filter = require(script.filter),
    find = require(script.find),
    findLast = require(script.findLast),
    findWhere = require(script.findWhere),
    findWhereLast = require(script.findWhereLast),
    flatten = require(script.flatten),
    freezeDeep = require(script.freezeDeep),
    includes = require(script.includes),
    insert = require(script.insert),
    is = require(script.is),
    last = require(script.last),
    map = require(script.map),
    pop = require(script.pop),
    push = require(script.push),
    reduce = require(script.reduce),
    reduceRight = require(script.reduceRight),
    removeIndex = require(script.removeIndex),
    removeIndices = require(script.removeIndices),
    removeValue = require(script.removeValue),
    removeValues = require(script.removeValues),
    reverse = require(script.reverse),
    set = require(script.set),
    shift = require(script.shift),
    shuffle = require(script.shuffle),
    slice = require(script.slice),
    some = require(script.some),
    splice = require(script.splice),
    toSet = require(script.toSet),
    unshift = require(script.unshift),
    update = require(script.update),
    zip = require(script.zip),
    zipAll = require(script.zipAll),

    freeze = table.freeze,
    values = table.clone,
}

table.freeze(exports)

return exports
