bun ./node_modules/roblox-ts/out/CLI/cli.js --rojo ./tests.project.json --type game
cp -fr ./tests/RuntimeLib.lua ./include/RuntimeLib.lua
rojo build ./tests.project.json --output ./tests/tests-place.rbxl
run-in-roblox --script ./tests/run-tests.luau --place ./tests/tests-place.rbxl