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
        else
            for index = 1, size do
                set[select(index, ...)] = true
            end
        end
    end

    Bencharoo.compare("add (x1)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1)
            end
        end),
    })

    Bencharoo.compare("add (x2)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2)
            end
        end),
    })

    Bencharoo.compare("add (x3)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2, 3)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2, 3)
            end
        end),
    })

    Bencharoo.compare("add (x4)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2, 3, 4)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2, 3, 4)
            end
        end),
    })

    Bencharoo.compare("add (x5)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2, 3, 4, 5)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2, 3, 4, 5)
            end
        end),
    })

    Bencharoo.compare("add (x6)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2, 3, 4, 5, 6)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2, 3, 4, 5, 6)
            end
        end),
    })

    Bencharoo.compare("add (x7)", {
        selectBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                selectBasedAdd(set, 1, 2, 3, 4, 5, 6, 7)
            end
        end),
        loopBasedAdd = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = {}

                loopBasedAdd(set, 1, 2, 3, 4, 5, 6, 7)
            end
        end),
    })
end
