URL = https://www.bitstamp.net/api/v2/trading-pairs-info/

all:
	npm install
	curl "$(URL)" >trading.json
	node bmm.js

clean:
	-rm -fr node_modules
