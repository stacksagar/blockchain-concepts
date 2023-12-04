import Blockchain from "./Blockchain";
import Block from "./Block";

const block1 = new Block(
  new Date().toISOString(),
  { amount: 10, from: "ssf", to: "gds" },
  "000"
);

const testchain = new Blockchain();
testchain.addNewBlock(block1);

console.log("testchain:", testchain);
