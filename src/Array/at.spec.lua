return function()
	local at = require(script.Parent.at)

	it("should return the value at the given index", function()
		local array = { 1, 2, 3 }

		expect(at(array, 1)).to.equal(1)
		expect(at(array, 2)).to.equal(2)
		expect(at(array, 3)).to.equal(3)
	end)

	it("should return nil if the index is out of bounds", function()
		local array = { 1, 2, 3 }

		expect(at(array, 4)).to.equal(nil)
	end)

	it("should return from the end if the index is negative (or 0)", function()
		local array = { 1, 2, 3 }

		expect(at(array, 0)).to.equal(3)
		expect(at(array, -1)).to.equal(2)
		expect(at(array, -2)).to.equal(1)
	end)
end
