--!strict
--!native

local function cloneDeep<K, V>(object: { [K]: V }): { [K]: V }
    local result = table.clone(object)

    for index, value in object do
        if type(value) == "table" then
            result[index] = cloneDeep(value) :: any
        end
    end

    return result
end

return cloneDeep
