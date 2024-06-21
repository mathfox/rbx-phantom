return function()
	local first = require(script.Parent.first)

	it("should return the first element of the given array", function()
		local array = { 1, 2, 3 }

		local first = first(array)

		expect(first).to.equal(1)
	end)
end
