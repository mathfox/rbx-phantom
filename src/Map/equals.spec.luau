return function()
    local equals = require(script.Parent.equals)

    it("should return true if the dictionaries are equal", function()
        local dictionary1 = { hello = "world", goodbye = "world" }
        local dictionary2 = { hello = "world", goodbye = "world" }

        expect(equals(dictionary1, dictionary2)).to.equal(true)
    end)

    it("should return false if the dictionaries are not equal", function()
        local dictionary1 = { hello = "world", goodbye = "world" }
        local dictionary2 = { hello = "world", goodbye = "world2" }

        expect(equals(dictionary1, dictionary2)).to.equal(false)
    end)

    it("should return false for nested dictionaries", function()
        local dictionary1 = { hello = "world", goodbye = { world = "hello" } }
        local dictionary2 = { hello = "world", goodbye = { world = "hello" } }

        expect(equals(dictionary1, dictionary2)).to.equal(false)
    end)
end
