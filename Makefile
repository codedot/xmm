all:
	npm install
	node test.js
	node daemon.js

clean:
	-rm -fr node_modules
