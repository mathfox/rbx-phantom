--!strict
--!native

local PhantomShared = {
    deepClone = require(script.deepClone),
    deepFreeze = require(script.deepFreeze),
    deepSafeFreeze = require(script.deepSafeFreeze),
    keys = require(script.keys),
    safeFreeze = require(script.safeFreeze),
    size = require(script.size),
    values = require(script.values),
}

local exports = {
    PhantomShared = PhantomShared,
}

return exports
