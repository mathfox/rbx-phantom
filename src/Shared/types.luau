--!strict
--!native
--!optimize 2

export type Table<TKey, TValue> = { [TKey]: TValue }

export type AnyTable = Table<any, any>

export type UnknownTable = Table<unknown, unknown>

return nil
