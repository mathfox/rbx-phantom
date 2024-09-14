return function()
    local equals = require(script.Parent.equals)

    it("should return true if the arrays are equal", function()
        local array1 = { 1, 2, 3 }
        local array2 = { 1, 2, 3 }

        expect(equals(array1, array2)).to.equal(true)
    end)

    it("should return false if the arrays are not equal", function()
        local array1 = { 1, 2, 3 }
        local array2 = { 1, 2, 4 }

        expect(equals(array1, array2)).to.equal(false)
    end)

    it("should return false for nested arrays", function()
        local array1 = { 1, 2, { 3, 4 } }
        local array2 = { 1, 2, { 3, 4 } }

        expect(equals(array1, array2)).to.equal(false)
    end)
end
