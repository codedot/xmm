all:
	npm install
	./cli.js --help

clean:
	-rm -fr node_modules
