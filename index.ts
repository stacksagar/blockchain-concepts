const sha256 = require("crypto-js/sha256");
class Block {
  timestamp: string;
  data: any;
  hash: string;
  previousHash: string;

  constructor(timestamp: string, data: any, previousHash: string) {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }

  generateHash() {
    return sha256(
      this.timestamp + JSON.stringify(this.data) + this.previousHash
    )?.toString();
  }
}

const block1 = new Block(
  new Date().toISOString(),
  { amount: 10, from: "ssf", to: "gds" },
  "000"
);

console.log("block:", block1);
