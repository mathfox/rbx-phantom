--!strict
--!native

type Unit = "seconds" | "milliseconds" | "microseconds" | "nanoseconds"

type BenchmarkResult = {
    callsAmount: number,
    timeElapsed: number,
    averageExecutionTime: number,
}

local UNITS = {
    ["seconds"] = 1,
    ["milliseconds"] = 1_000,
    ["microseconds"] = 1_000_000,
    ["nanoseconds"] = 1_000_000_000,
}

-- Aliases
local clock = os.clock

type BenchmarkDisplayOptions = {
    -- Defaults to `milliseconds`.
    unit: Unit | nil,
    -- Defaults to 3.
    decPlaces: number | nil,
}

type BenchmarkDisplayNormalizedOptions = {
    unit: Unit,
    decPlaces: number,
}

function normalizeDisplayOptions(
    options: BenchmarkDisplayOptions | nil
): BenchmarkDisplayNormalizedOptions
    if not options then
        return {
            decPlaces = 3,
            unit = "milliseconds",
        }
    end

    local clonedOptions = table.clone(options)

    if not clonedOptions.unit then
        clonedOptions.unit = "milliseconds"
    end

    if not clonedOptions.decPlaces then
        clonedOptions.decPlaces = 3
    end

    return clonedOptions :: BenchmarkDisplayNormalizedOptions
end

function formatExecutionTime(
    timeElapsed: number,
    decPlaces: number,
    unit: Unit
): string
    local multiplier = UNITS[unit]

    return string.format(`%.{decPlaces}f {unit}`, timeElapsed * multiplier)
end

local function displayResult(
    message: string,
    result: BenchmarkResult,
    options: BenchmarkDisplayOptions | nil
)
    local normalizedOptions = normalizeDisplayOptions(options)

    local decPlaces = normalizedOptions.decPlaces
    local unit = normalizedOptions.unit
    local elapsed = result.timeElapsed
    local n = result.callsAmount

    print(
        `\n\t({message}) benchmark results:\n\t- {n} function calls\n\t- {formatExecutionTime(
            elapsed,
            decPlaces,
            unit :: Unit
        )} elapsed\n\t- {formatExecutionTime(
            elapsed / n,
            decPlaces,
            unit :: Unit
        )} avg execution time.\n`
    )
end

local function benchmark(n: number, f: () -> (), ...): BenchmarkResult
    local callerThread = coroutine.running()
    local frameTime = 1 / 60 * 3

    local thread = coroutine.create(function(...)
        local previousRestTime = 0
        local elapsed = 0

        for i = 1, n do
            local now = clock()
            f(...)
            elapsed += clock() - now

            if elapsed - previousRestTime >= frameTime then
                previousRestTime = elapsed
                -- We are throttling the game, we should rest
                task.wait()
            end
        end

        local result: BenchmarkResult = {
            callsAmount = n,
            timeElapsed = elapsed,
            averageExecutionTime = elapsed / n,
        }

        task.defer(callerThread, result)
    end)

    task.spawn(thread, ...)

    return coroutine.yield(callerThread)
end

local function compare(
    message: string,
    results: { [string]: BenchmarkResult },
    options: BenchmarkDisplayOptions | nil
)
    local normalizedOptions = normalizeDisplayOptions(options)

    local fastestTime = math.huge
    local fastestName = nil

    for name, result in results do
        if result.timeElapsed < fastestTime then
            fastestTime = result.timeElapsed
            fastestName = name
        end
    end

    if fastestTime == math.huge then
        return
    end

    local output = ""

    for name, result in results do
        if name == fastestName then
            continue
        end

        local slowerPercent = math.round(
            (
                1
                - (
                    results[fastestName].averageExecutionTime
                    / result.averageExecutionTime
                )
            ) * 100
        )

        output = `{output}\n\t\t- ({name}) is {slowerPercent}% slower.`
    end

    local executionTimeOutput = ""

    for name, result in results do
        executionTimeOutput =
            `{executionTimeOutput}\n\t\t- ({name}) took on average {formatExecutionTime(
                result.averageExecutionTime,
                normalizedOptions.decPlaces,
                normalizedOptions.unit
            )} `
    end

    print(
        `\n\nBenchmarks comparison for ({message}):\n\tFastest - {fastestName}{output}\n\tExecution times:{executionTimeOutput}`
    )
end

local Benchmarker = {}
Benchmarker.__index = Benchmarker

function Benchmarker.new()
    local self = setmetatable({}, Benchmarker)

    return self
end

local exports = {
    benchmark = benchmark,
    displayResult = displayResult,
    compare = compare,
    Benchmarker = Benchmarker,
}

return exports
