all:
	npm install
	./cli.js -h
	./cli.js generate >|dummy.json
	./cli.js -c dummy.json balance rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh
	./cli.js -c dummy.json ledger 3
	./cli.js -c dummy.json balance fund
	./cli.js -c dummy.json balance bank

clean:
	-rm -f dummy.json
	-rm -fr node_modules
