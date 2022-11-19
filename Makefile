all: say_version build test clean

tests: build test clean dev

say_version:
	@echo "rose/infra v1"

build:
	@echo "Building..."
	yarn build

test:
	@echo "Testing..."
	yarn test

clean:
	@echo "Cleaning up..."
	yarn clean


dev:
	@echo "Running server up..."
	yarn dev

