return function()
	local includes = require(script.Parent.includes)

	it("should return true if the given array includes the given value", function()
		local array = { 1, 2, 3 }

		local includes = includes(array, 2)

		expect(includes).to.equal(true)
	end)
end
