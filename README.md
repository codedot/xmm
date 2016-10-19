This is a work in progress on an automated multi-currency combined
market maker and market taker for [the Ripple network][1]
providing both CLI and API based on [RippleAPI][2].

# CLI

This package provides an `xmm` command with the following interface:

```
Usage: xmm [options] <command> [arguments]

Commands:
  balance <wallet>  Check balances in a wallet       [aliases: b, bal]
  generate          Create a new Ripple address    [aliases: gen, new]
  ledger [count]    Wait for ledger(s) to close        [aliases: wait]
  send <src> <dst>  Pay or convert a value              [aliases: pay]
  testnet           Generate testnet configuration    [aliases: dummy]
  what <string>     Tell what a string means          [aliases: parse]

Options:
  --assets       Dictionary of assets                    [default: {}]
  --count, -n    Number of ledgers to close               [default: 1]
  --cushion, -f  Factor to multiply estimated fee         [default: 1]
  --delta, -d    Stake to trade                        [default: 0.01]
  --ledger, -l   Historical ledger version                    [number]
  --server, -s   WebSocket server     [default: "wss://s1.ripple.com"]
  --timeout, -t  Timeout in seconds for requests          [default: 5]
  --wallets      Dictionary of wallets                   [default: {}]
  --config, -c   Path to JSON config file       [default: ~/.xmm.json]
  --version, -v  Show version number                         [boolean]
  --help, -h     Show help                                   [boolean]

```

# API

Through `require("xmm")` this package exports two functions.

The `.testnet()` function returns a Promise of dummy configuration
for [the Ripple Test Net][3] with two funded accounts created for
developing and testing purposes.

The `.connect(config)` function takes configuration as its argument and
returns a Promise of an XMM object encapsulating an instance of [RippleAPI][2]
already connected to a server and after a ledger has been closed.

[1]: https://ripple.com/
[2]: https://ripple.com/build/rippleapi/
[3]: https://ripple.com/build/ripple-test-net/

# License

Copyright (c) 2015 Anton Salikhmetov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
