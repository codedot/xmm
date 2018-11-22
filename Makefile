all: serial.js
	npm install
	node daemon.js r.ripple.com:51235

serial.js: buffer.proto
	npm install --no-save protobufjs@6.8.8
	node_modules/.bin/pbjs -t static-module $< -o $@

clean:
	-rm -fr node_modules
