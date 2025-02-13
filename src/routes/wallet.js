const express = require('express');
const { Wallet } = require('ethers');
const TronWeb = require('tronweb');
const router = express.Router();

router.get('/create-wallet', (req, res) => {
    const wallet = Wallet.createRandom();
    req.app.locals.privateKey = wallet.privateKey;
    res.json({ mnemonic: wallet.mnemonic.phrase });
});

router.get('/get-usdt-address', (req, res) => {
    const privateKey = req.app.locals.privateKey;
    if (!privateKey) return res.status(400).json({ error: "No wallet created" });

    const tronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io'
    });
    const tronAddress = tronWeb.address.fromPrivateKey(privateKey);
    res.json({ address: tronAddress });
});

module.exports = router;
