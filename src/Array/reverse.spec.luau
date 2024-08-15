return function()
    local reverse = require(script.Parent.reverse)

    it("should reverse the given array", function()
        local array = { 1, 2, 3 }

        local reversed = reverse(array)

        expect(reversed[1]).to.equal(3)
        expect(reversed[2]).to.equal(2)
        expect(reversed[3]).to.equal(1)
    end)

    it("should modify the original array", function()
        local array = { 1, 2, 3 }

        local newArray = reverse(array)

        expect(array).to.equal(newArray)
    end)
end
