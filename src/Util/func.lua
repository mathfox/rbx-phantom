--!strict

local exports = {}

function exports.truthy()
	return true
end

function exports.noop() end

function exports.returned(...)
	return ...
end

table.freeze(exports)

return exports
