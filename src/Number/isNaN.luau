--!strict
--!native
--!optimize 2

return function(value: any): boolean
    return type(value) == "number" and value ~= value
end
