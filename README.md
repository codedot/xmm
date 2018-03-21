Starting from [v9.9.0][1],
Node.js exposes `SSL_get_finished` and `SSL_get_peer_finished`
from OpenSSL as `tlsSocket.getFinished()` and
`tlsSocket.getPeerFinished()` in the [TLS/SSL][2] module.

[1]: https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V9.md#9.9.0
[2]: https://nodejs.org/dist/latest-v9.x/docs/api/tls.html
