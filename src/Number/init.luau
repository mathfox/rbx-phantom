--!strict
--!native
--!optimize 2

local exports = {
    EPSILON = require(script.EPSILON),
    isFinite = require(script.isFinite),
    isInteger = require(script.isInteger),
    isNaN = require(script.isNaN),
    isSafeInteger = require(script.isSafeInteger),
    MAX_SAFE_INTEGER = require(script.MAX_SAFE_INTEGER),
    MAX_VALUE = require(script.MAX_VALUE),
    MIN_SAFE_INTEGER = require(script.MIN_SAFE_INTEGER),
    MIN_VALUE = require(script.MIN_VALUE),
    NaN = require(script.NaN),
    NEGATIVE_INFINITY = require(script.NEGATIVE_INFINITY),
    POSITIVE_INFINITY = require(script.POSITIVE_INFINITY),
}

return exports
