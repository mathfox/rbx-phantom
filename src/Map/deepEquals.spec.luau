return function()
    local deepEquals = require(script.Parent.deepEquals)

    it("should return true if the dictionaries are equal", function()
        local dictionary1 = { hello = "world", goodbye = "world" }
        local dictionary2 = { hello = "world", goodbye = "world" }

        expect(deepEquals(dictionary1, dictionary2)).to.equal(true)
    end)

    it("should return false if the dictionaries are not equal", function()
        local dictionary1 = { hello = "world", goodbye = "world" }
        local dictionary2 = { hello = "world", goodbye = "world2" }

        expect(deepEquals(dictionary1, dictionary2)).to.equal(false)
    end)

    it("should return true for nested dictionaries", function()
        local dictionary1 = { hello = "world", goodbye = { world = "hello" } }
        local dictionary2 = { hello = "world", goodbye = { world = "hello" } }
        local dictionary3 = { hello = "world", goodbye = { world = "world" } }

        expect(deepEquals(dictionary1, dictionary2)).to.equal(true)
        expect(deepEquals(dictionary1, dictionary3)).to.equal(false)
    end)
end
