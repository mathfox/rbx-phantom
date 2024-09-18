--!strict
--!native
--!optimize 2

return function(value: any): boolean
    return type(value) == "number" and value == value and value ~= math.huge and value ~= -math.huge
end
