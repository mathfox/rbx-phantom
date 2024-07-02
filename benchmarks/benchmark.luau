type Unit = "seconds" | "milliseconds" | "microseconds" | "nanoseconds"

local units = {
    ["seconds"] = 1,
    ["milliseconds"] = 1000,
    ["microseconds"] = 1000000,
    ["nanoseconds"] = 1000000000,
}

local function benchmark(
    message: string,
    unit: Unit,
    decPlaces: number,
    n: number,
    f: () -> nil,
    ...
)
    task.spawn(function(...)
        local elapsed = 0
        local multiplier = units[unit]

        for i = 1, n do
            local now = os.clock()
            f(...)
            elapsed = elapsed + (os.clock() - now)
        end

        print(
            string.format(
                "\n(%s) Benchmark results:\n  - %d function calls\n  - %."
                    .. decPlaces
                    .. "f %s elapsed\n  - %."
                    .. decPlaces
                    .. "f %s avg execution time.\n",
                message,
                n,
                elapsed * multiplier,
                unit,
                (elapsed / n) * multiplier,
                unit
            )
        )
    end, ...)
end

local exports = {
    benchmark = benchmark,
}

table.freeze(exports)

return exports
