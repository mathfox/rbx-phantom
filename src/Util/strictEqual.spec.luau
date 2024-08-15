local strictEqual = require(script.Parent.strictEqual)

return function()
    it("should return when values are strict equal", function()
        expect(strictEqual(3, 3)).to.equal(true)

        expect(strictEqual({}, {})).to.equal(false)
    end)
end
