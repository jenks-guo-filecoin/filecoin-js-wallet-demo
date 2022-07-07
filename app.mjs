import { HttpJsonRpcConnector, LotusWalletProvider, LotusClient } from 'filecoin.js';

(async () => {

  const connector = new HttpJsonRpcConnector({ url: "http://127.0.0.1:1234/rpc/v0", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.CZ5IMe2l6E8zkzeVVCF_qUTNl7Urx0xvNyXYukWp1iM" });

  const client = new LotusClient(connector);
  const version = await client.common.version();
  console.log(version);

  const walletLotusHttp = new LotusWalletProvider(client);
  let address1 = await walletProvider.newAddress();
  let address2 = await walletProvider.newAddress();
  let address3 = await walletProvider.newAddress();
  console.log("address1: " + address1 + ";");
  console.log("address2: " + address2 + ";");
  console.log("address3: " + address3 + ";");

  const defaultAddress = await walletLotusHttp.getDefaultAddress();


  walletProvider.msigCreate(2, [address1, address2, address3], 0, 0, "1000", defaultAddress);


})().then().catch();