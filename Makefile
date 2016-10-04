CLI = ./cli.js
TEST = $(CLI) -c dummy.json

all:
	npm install
	$(CLI) --help
	$(CLI) ledger

test:
	npm install
	node gen >dummy.json
	cat dummy.json
	$(TEST) ledger

clean:
	-rm -f dummy.json
	-rm -fr node_modules
