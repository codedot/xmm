all:
	npm install
	node daemon.js

clean:
	-rm -fr node_modules
