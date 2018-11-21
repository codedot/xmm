all:
	npm install
	node upgrade.js r.ripple.com:51235

clean:
	-rm -fr node_modules
