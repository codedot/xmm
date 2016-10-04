all:
	npm install
	./cli.js --help
	./cli.js ledger

clean:
	-rm -fr node_modules
