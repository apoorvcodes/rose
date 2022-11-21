all: say_version build test clean

tests: build test clean dev simulate build-sim clean

say_version:
	@echo "rose/infra v1"

build:
	@echo "Building..."
	yarn build

test:
	@echo "Testing..."
	yarn test


dev:
	@echo "Running server up..."
	yarn dev

simulate:
	@echo "Running golang simulations"
	go run simulations/main.go

build-sim:
	@echo "Building golang simulations"
	go build simulations/main.go

clean:
	@echo "Cleaning go and ts code" 
	yarn pretty
	go fmt simulations

