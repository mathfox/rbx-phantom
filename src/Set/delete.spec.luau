return function()
    local delete = require(script.Parent.delete)

    it("should delete a value from a set", function()
        local set = { hello = true }

        local newSet = delete(set, "hello")

        expect(newSet).to.be.a("table")
        expect(newSet).to.equal(set)

        expect(newSet.hello).to.equal(nil)
    end)

    it("should modify the original set", function()
        local set = { hello = true }

        delete(set, "hello")

        expect(set).to.be.a("table")
        expect(set.hello).to.equal(nil)
    end)
end
