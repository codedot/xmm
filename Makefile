all:
	npm install
	node test.js
	node ips.js

clean:
	-rm -fr node_modules
