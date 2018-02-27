Starting from [v10.0.0-nightly2018031198a14e026b][1],
Node.js exposes `SSL_get_finished` and `SSL_get_peer_finished`
from OpenSSL as `tlsSocket.getFinished()` and
`tlsSocket.getPeerFinished()` in the [TLS/SSL][2] module.

[1]: https://nodejs.org/download/nightly/v10.0.0-nightly2018031198a14e026b/
[2]: https://nodejs.org/download/nightly/v10.0.0-nightly2018031198a14e026b/docs/api/tls.html
