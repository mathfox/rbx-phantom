--!strict

local None = require(script.None)
local Array = require(script.Array)

local exports = {
	Array = Array,
	Map = require(script.Map),
	Set = require(script.Set),

	None = None,

	equalObjects = require(script.Util.equalObjects),
}

export type None = None.None
export type Array<T> = Array.Array<T>

table.freeze(exports)

return exports
