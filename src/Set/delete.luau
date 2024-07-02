--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
  @function delete
  @within Set

  @param set { [T]: boolean } -- The set to delete from.
  @param ... ...T -- The values to delete.
  @return { [T]: boolean } -- The set with the values deleted.

  Deletes values from a set.

  ```lua
  local set = { hello = true, world = true }

  local newSet = delete(set, "hello") -- { world = true }
  ```
]=]
local function delete<T>(set: Set<T>, ...: T): Set<T>
	for _, value in { ... } do
		set[value] = nil
	end

	return set
end

return delete
