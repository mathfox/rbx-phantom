local exports = {
    freeze = table.freeze,
    values = require(script.values),
    size = require(script.size),
}

table.freeze(exports)

return exports
