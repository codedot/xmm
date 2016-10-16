all:
	npm install
	./cli.js -h
	./cli.js generate >|dummy.json
	./cli.js -c dummy.json balance root
	./cli.js -c dummy.json what fund
	./cli.js -c dummy.json what XMM@bank
	./cli.js -c dummy.json what USD:123.45@root
	./cli.js -c dummy.json balance fund
	./cli.js -c dummy.json balance bank

clean:
	-rm -f dummy.json
	-rm -fr node_modules
