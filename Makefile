all:
	npm install
	node bmm help
	node bmm

clean:
	-rm -fr node_modules
