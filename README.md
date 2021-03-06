This package encapsulates [RippleAPI][2], providing both CLI and API,
and implements an automated multi-currency market maker for
[the Ripple network][1] using [the Talmud strategy][4].

# CLI

This package provides an `xmm` command with the following interface:

```
Usage: xmm [options] <command> [arguments]

Commands:
  altnet            Generate altnet configuration     [aliases: dummy]
  balance <me>      Check balances in a wallet       [aliases: b, bal]
  cost <dst> [me]   Estimate cost of a value          [aliases: price]
  generate          Create a new address           [aliases: gen, new]
  hedge <me>        Apply the Talmud strategy   [aliases: run, talmud]
  kill <offer>      Cancel an existing order     [aliases: cancel, rm]
  ledger [count]    Wait for ledger(s) to close        [aliases: wait]
  offer <offer>     Create a limit order      [aliases: create, order]
  send <src> <dst>  Pay or convert a value              [aliases: pay]
  trust <dst>       Set a trust line                    [aliases: set]
  view <me>         List active orders         [aliases: active, list]
  what <string>     Tell what a string means          [aliases: parse]

Options:
  --assets       Dictionary of assets                    [default: {}]
  --count, -n    Number of ledgers to close               [default: 1]
  --cushion, -f  Factor to multiply estimated fee         [default: 1]
  --delta, -d    Stake to trade                        [default: 0.01]
  --dry, -p      Output script without running               [boolean]
  --hedge        List of pairs to trade                  [default: []]
  --ledger, -l   Historical ledger version                    [number]
  --maxfee, -m   Maximum fee to pay                 [default: 0.00001]
  --offset, -o   Offset from the current legder           [default: 3]
  --server, -s   WebSocket server     [default: "wss://s1.ripple.com"]
  --timeout, -t  Timeout in seconds                      [default: 60]
  --wallets      Dictionary of wallets                   [default: {}]
  --yes, -y      Do not ask for confirmation                 [boolean]
  --config, -c   Path to JSON config file       [default: ~/.xmm.json]
  --version, -v  Show version number                         [boolean]
  --help, -h     Show help                                   [boolean]

```

# API

Through `require("xmm")` this package exports two functions.

The `.altnet()` function returns a Promise of dummy configuration
for [the Ripple Test Net][3] with one funded account created for
developing and testing purposes.

The `.connect(config)` function takes configuration as its argument and
returns a Promise of an XMM object encapsulating an instance of [RippleAPI][2]
already connected to a server and after a ledger has been closed.

[1]: https://ripple.com/
[2]: https://ripple.com/build/rippleapi/
[3]: https://ripple.com/build/ripple-test-net/
[4]: https://github.com/codedot/xmm/wiki

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
