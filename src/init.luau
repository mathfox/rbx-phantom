--!strict
--!native

local Array = require(script.Array)
local None = require(script.None)
local Set = require(script.Set)

export type Array<T> = Array.Array<T>
export type None = None.None
export type Set<T> = Set.Set<T>

local exports = {
    Array = Array,
    Map = require(script.Map),
    None = None,
    Set = require(script.Set),
    Shared = require(script.Shared),

    strictEqual = require(script.Util).strictEqual,
}

return exports
