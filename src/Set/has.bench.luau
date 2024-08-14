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
        else
            for index = 1, size do
                set[select(index, ...)] = true
            end
        end
    end

    Bencharoo.compare("has (x1) - non match", {
        selectBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                selectBasedHas(set, 1)
            end
        end),
        loopBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                loopBasedHas(set, 1)
            end
        end),
    })

    Bencharoo.compare("has (x1) - non match", {
        selectBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                selectBasedHas(set, 1)
            end
        end),
        loopBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                loopBasedHas(set, 1)
            end
        end),
    })

    Bencharoo.compare("has (x1) - non match", {
        selectBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                selectBasedHas(set, 1)
            end
        end),
        loopBasedHas = Bencharoo.benchmark(100, function()
            for _ = 1, 100_000 do
                local set = { [1] = true }

                loopBasedHas(set, 1)
            end
        end),
    })
end
