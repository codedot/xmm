all:
	npm install
	node bmm.js

clean:
	-rm -fr node_modules
