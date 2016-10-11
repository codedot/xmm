all:
	npm install
	node gen >|dummy.json
	./cli.js -c dummy.json --help
	./cli.js -c dummy.json ledger
	./cli.js -c dummy.json ledger
	./cli.js -c dummy.json ledger
	./cli.js -c dummy.json balance fund
	./cli.js -c dummy.json balance bank

clean:
	-rm -f dummy.json
	-rm -fr node_modules
