--!strict
--!native

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Bencharoo = require(ReplicatedStorage.Benchmarks.benchmark)

return function()
    local function loopBasedHas(set, ...): boolean
        for index = 1, select("#", ...) do
            if not set[select(index, ...)] then
                return false
            end
        end

        return true
    end

    local function selectBasedHas(set, ...): boolean
        local size = select("#", ...)

        if size == 1 then
            return set[select(1, ...)] == true
        elseif size == 2 then
            return set[select(1, ...)] == true and set[select(2, ...)] == true
        elseif size == 3 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
        elseif size == 4 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
                and set[select(4, ...)] == true
        elseif size == 5 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
                and set[select(4, ...)] == true
                and set[select(5, ...)] == true
        elseif size == 6 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
                and set[select(4, ...)] == true
                and set[select(5, ...)] == true
                and set[select(6, ...)] == true
        elseif size == 7 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
                and set[select(4, ...)] == true
                and set[select(5, ...)] == true
                and set[select(6, ...)] == true
                and set[select(7, ...)] == true
        elseif size == 8 then
            return set[select(1, ...)] == true
                and set[select(2, ...)] == true
                and set[select(3, ...)] == true
                and set[select(4, ...)] == true
                and set[select(5, ...)] == true
                and set[select(6, ...)] == true
                and set[select(7, ...)] == true
                and set[select(8, ...)] == true
        else
            for index = 1, size do
                if not set[select(index, ...)] then
                    return false
                end
            end

            return true
        end
    end

    for count = 1, 8 do
        local args = {}

        for index = 1, count do
            table.insert(args, index)
        end

        local zeroMatch = {}
        local allMatch = {}

        for index = 1, count do
            allMatch[index] = true
        end

        Bencharoo.compare(`has (x{count}) - zero match`, {
            selectBasedHas = Bencharoo.benchmark(1000, function(...)
                for _ = 1, 100_000 do
                    selectBasedHas(zeroMatch, ...)
                end
            end, unpack(args)),
            loopBasedHas = Bencharoo.benchmark(1000, function(...)
                for _ = 1, 100_000 do
                    loopBasedHas(zeroMatch, ...)
                end
            end, unpack(args)),
        })

        Bencharoo.compare(`has (x{count}) - all match`, {
            selectBasedHas = Bencharoo.benchmark(1000, function(...)
                for _ = 1, 100_000 do
                    selectBasedHas(allMatch, ...)
                end
            end, unpack(args)),
            loopBasedHas = Bencharoo.benchmark(1000, function(...)
                for _ = 1, 100_000 do
                    loopBasedHas(allMatch, ...)
                end
            end, unpack(args)),
        })
    end
end
