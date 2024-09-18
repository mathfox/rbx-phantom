--!strict
--!native
--!optimize 2

local function trim(value: string): string
    return ((value:gsub("^%s+", "")):gsub("%s+$", ""))
end

return trim
