local ReplicatedStorage = game:GetService("ReplicatedStorage")

local benchmark = require(ReplicatedStorage.Benchmarks.benchmark).benchmark

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
        else
            for index = 1, size do
                set[select(index, ...)] = true
            end
        end
    end

    benchmark("selectBasedAdd x1", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1)
        end
    end)

    benchmark("loopBasedAdd x1", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1)
        end
    end)

    benchmark("selectBasedAdd x2", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2)
        end
    end)

    benchmark("loopBasedAdd x2", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2)
        end
    end)

    benchmark("selectBasedAdd x3", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2, 3)
        end
    end)

    benchmark("loopBasedAdd x3", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2, 3)
        end
    end)

    benchmark("selectBasedAdd x4", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2, 3, 4)
        end
    end)

    benchmark("loopBasedAdd x4", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2, 3, 4)
        end
    end)

    benchmark("selectBasedAdd x5", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2, 3, 4, 5)
        end
    end)

    benchmark("loopBasedAdd x5", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2, 3, 4, 5)
        end
    end)

    benchmark("selectBasedAdd x6", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2, 3, 4, 5, 6)
        end
    end)

    benchmark("loopBasedAdd x6", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2, 3, 4, 5, 6)
        end
    end)

    benchmark("selectBasedAdd x7", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            selectBasedAdd(set, 1, 2, 3, 4, 5, 6, 7)
        end
    end)

    benchmark("loopBasedAdd x7", "milliseconds", 3, 100, function()
        for _ = 1, 1_000_000 do
            local set = {}

            loopBasedAdd(set, 1, 2, 3, 4, 5, 6, 7)
        end
    end)
end
