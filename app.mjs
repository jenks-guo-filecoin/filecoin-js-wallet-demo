import { HttpJsonRpcConnector, LotusWalletProvider, LotusClient } from 'filecoin.js';

(async () => {

  const connector = new HttpJsonRpcConnector({ url: "http://127.0.0.1:1234/rpc/v0", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.CZ5IMe2l6E8zkzeVVCF_qUTNl7Urx0xvNyXYukWp1iM" });

  const client = new LotusClient(connector);
  const version = await client.common.version();
  console.log("Lotus version number is " + version.Version + ";\n");

  const walletLotusHttp = new LotusWalletProvider(client);
  let address1 = await walletLotusHttp.newAddress();
  let address2 = await walletLotusHttp.newAddress();
  let address3 = await walletLotusHttp.newAddress();
  console.log("New wallet addresses:")
  console.log("address1: " + address1 + ";");
  console.log("address2: " + address2 + ";");
  console.log("address3: " + address3 + ";\n");

  const defaultAddress = await walletLotusHttp.getDefaultAddress();
  console.log("defaultAdress is: " + defaultAddress + ";\n");

  const msigWalletAddress = await walletLotusHttp.msigCreate(2, [address1, address2, address3], 0, 0, "1000", defaultAddress);
  console.log("Multisig Wallet Address: " + msigWalletAddress['/'] + ";");

})().then().catch();