CONF = dummy.json
TEST = ./cli.js -c $(CONF)

all:
	npm install
	./cli.js -h
	./cli.js generate >|$(CONF)
	$(TEST) balance root
	$(TEST) what fund
	$(TEST) what XMM@bank
	$(TEST) what USD:123.45@root
	$(TEST) what USD.bank:123.45@fund
	$(TEST) what XMM.fund@bank
	$(TEST) what XRP:1e-6@root
	$(TEST) balance fund
	$(TEST) balance bank

clean:
	-rm -f $(CONF)
	-rm -fr node_modules
