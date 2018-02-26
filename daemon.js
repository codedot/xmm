"use strict";

const ecdh = require("crypto").createECDH("secp256k1");
const pub = ecdh.generateKeys("base64", "compressed");
const priv = ecdh.getPrivateKey("base64");

console.info(pub, priv);
