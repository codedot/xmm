CLI = ./cli.js
TEST = $(CLI) -c dummy.json

all: install
	$(CLI) --help
	$(CLI) ledger

test: install
	node gen >|dummy.json
	$(TEST) ledger
	$(TEST) ledger
	$(TEST) ledger
	$(TEST) balance fund
	$(TEST) balance bank

install:
	npm install

clean:
	-rm -f dummy.json
	-rm -fr node_modules
