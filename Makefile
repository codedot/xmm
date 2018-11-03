all:
	npm install
	node test.js
	node upgrade.js r.ripple.com:51235
	node upgrade.js 127.0.0.1:51235

clean:
	-rm -fr node_modules
