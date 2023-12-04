export interface Block {
  data: any; 
  hash: string;
  previousHash: string;
  timestamp: string;
}

export default class Blockchain {
  chain: Block[];
  constructor() {
    this.chain = [];
  }

  addNewBlock(block: Block) {
    this.chain.push(block);
  }
}
