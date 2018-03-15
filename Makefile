URL = https://r.ripple.com:51235/crawl

all:
	curl $(URL) >|ips.json
	npm install
	node daemon.js

clean:
	-rm -f ips.json
	-rm -fr node_modules
