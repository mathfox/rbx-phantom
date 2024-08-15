return function()
    local isArray = require(script.Parent.isArray)

    it("should detect empty array", function()
        expect(isArray({})).to.equal(true)
    end)

    it("should return whether the given object is an array", function()
        expect(isArray({ 1, 2, 3 })).to.equal(true)
        expect(isArray({ hello = "world" })).to.equal(false)
        expect(isArray({ 1, 2, hello = "world" })).to.equal(false)
    end)

    it("should not allow sparsed arrays", function()
        expect(isArray({ 1, 2, 3, nil, 5 })).to.equal(false)
    end)
end
