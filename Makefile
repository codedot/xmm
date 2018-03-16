all:
	npm install
	node test.js

clean:
	-rm -fr node_modules
