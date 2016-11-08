CONF = dummy.json
TEST = node xmm -c $(CONF)

all:
	npm install
	$(TEST) altnet >|$(CONF)
	$(TEST) generate
	$(TEST) ledger
	$(TEST) balance rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh
	$(TEST) what root
	$(TEST) what XRP@bank
	$(TEST) what EUR.bank:.1e-1@fund
	$(TEST) balance bank
	$(TEST) send XRP:123.456@bank XRP:123.456@fund
	$(TEST) ledger 2
	$(TEST) balance fund
	$(TEST) trust USD:100@fund
	$(TEST) cost USD:12.3@fund bank
	$(TEST) ledger
	$(TEST) send USD:12.3@bank USD:12.3@fund
	$(TEST) balance -n 3 fund

clean:
	-rm -f $(CONF)
	-rm -fr node_modules
