import crypto from "crypto";
interface BlockShape{
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(preveHash: string, height: number, data: string): string{
        const toHash = `${preveHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blcochain{
    private blocks: Block[];
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length -1].hash;
    }
    public addBlock(data: string){
        const newBlock = new Block(
            this.getPrevHash(),
            this.blocks.length + 1,
            data
        );
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        return [...this.blocks];
    }
}

const blockchain = new Blcochain();

blockchain.addBlock("first block");
blockchain.addBlock("second block");
blockchain.addBlock("third block");
blockchain.addBlock("fourth block");

console.log(blockchain.getBlocks());
