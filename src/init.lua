--!strict
local Types = require(script.Types)

--[=[
	@class Phantom

	Phantom is a library for manipulating arrays. It provides a number of
	functions for manipulating arrays (lists), dictionaries, and sets.

	Phantom is comprised of a number of submodules. Each submodule provides
	a number of functions for manipulating a specific type of data, and
	can be accessed via their respective names within the Phantom module
	(e.g. `Phantom.Array.at()`), or accessed directly (e.g. `local at = require(Phantom.Array.at)`).

	Some methods and modules also have aliases, which can are documented in the
	corresponding submodule/method's documentation.

	See the individual submodule pages for full documentation.

	The Luau types `Dictionary<K, V>`, `Array<T>` (aliased as `List<T>`) and `Set<T>` are exported from the Phantom module (e.g. they can be used via `Phantom.Array<string>`), but are also available from [Phantom.Types].
]=]
local Phantom = {
	Array = require(script.Array),
	Dictionary = require(script.Dictionary),
	Set = require(script.Set),

	None = require(script.None),
	Types = require(script.Types),

	equalObjects = require(script.Util.equalObjects),
	isEmpty = require(script.Util.isEmpty),
}

Phantom.List = Phantom.Array

--- @prop Array Array
--- @within Phantom

--- @prop List Array
--- @within Phantom
--- @tag Alias

--- @prop Dictionary Dictionary
--- @within Phantom

--- @prop Set Set
--- @within Phantom

--- @prop Types Types
--- @within Phantom

export type Dictionary<K, V> = Types.Dictionary<K, V>

export type Array<T> = Types.Array<T>
export type List<T> = Array<T>
export type Set<T> = Types.Set<T>

table.freeze(Phantom)

return Phantom
