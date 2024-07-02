local None = require(script.Parent.None)

--[=[
  @type None None
  @within Phantom
]=]
export type None = typeof(None)
export type Dictionary<K, V> = { [K]: V }
export type Array<T> = Dictionary<number, T>
export type Set<T> = Dictionary<T, boolean>

return nil
