import sha256 from "crypto-js/sha256";
export default class Block {
  data: any;
  hash: string;
  previousHash: string;
  timestamp: string;

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
