all:
	npm install
	node local.js

clean:
	-rm -fr node_modules
