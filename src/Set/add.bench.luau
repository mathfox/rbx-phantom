--!strict
--!native

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Bencharoo = require(ReplicatedStorage.Benchmarks.benchmark)

return function()
    local function loopBasedAdd(set, ...)
        for index = 1, select("#", ...) do
            set[select(index, ...)] = true
        end
    end

    local function selectBasedAdd(set, ...)
        local size = select("#", ...)

        if size == 1 then
            set[select(1, ...)] = true
        elseif size == 2 then
            set[select(1, ...)] = true
            set[select(2, ...)] = true
        elseif size == 3 then
            set[select(1, ...)] = true
            set[select(2, ...)] = true
            set[select(3, ...)] = true
        elseif size == 4 then
            set[select(1, ...)] = true
            set[select(2, ...)] = true
            set[select(3, ...)] = true
            set[select(4, ...)] = true
        elseif size == 5 then
            set[select(1, ...)] = true
            set[select(2, ...)] = true
            set[select(3, ...)] = true
            set[select(4, ...)] = true
            set[select(5, ...)] = true
        elseif size == 6 then
            set[select(1, ...)] = true
            set[select(2, ...)] = true
            set[select(3, ...)] = true
            set[select(4, ...)] = true
            set[select(5, ...)] = true
            set[select(6, ...)] = true
        else
            for index = 1, size do
                set[select(index, ...)] = true
            end
        end
    end

    for count = 1, 7 do
        local args = {}

        for index = 1, count do
            table.insert(args, index)
        end

        Bencharoo.compare(`add (x{count})`, {
            selectBasedAdd = Bencharoo.benchmark(100, function(...)
                for _ = 1, 100_000 do
                    local set = {}

                    selectBasedAdd(set, ...)
                end
            end, unpack(args)),
            loopBasedAdd = Bencharoo.benchmark(100, function(...)
                for _ = 1, 100_000 do
                    local set = {}

                    loopBasedAdd(set, ...)
                end
            end, unpack(args)),
        })
    end
end
