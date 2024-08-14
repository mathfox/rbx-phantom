--!strict
--!native

local function safeFreeze(object)
    if not table.isfrozen(object) then
        table.freeze(object)
    end
end

return safeFreeze
