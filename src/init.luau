--!strict
--!native

local None = require(script.None)
local Array = require(script.Array)

export type None = None.None
export type Array<T> = Array.Array<T>

local exports = {
    Array = Array,
    Map = require(script.Map),
    Set = require(script.Set),

    None = None,
}

return exports
