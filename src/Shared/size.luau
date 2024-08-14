--!strict
--!native

local function size(value: { [unknown]: unknown }): number
    local count = 0

    for _ in value do
        count += 1
    end

    return count
end

return size
