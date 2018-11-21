all:
	npm install
	node daemon.js r.ripple.com:51235

clean:
	-rm -fr node_modules
