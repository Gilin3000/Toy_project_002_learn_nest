import { init, exit } from "./myPackage";

class Block{
    constructor(private data: string) {}
    static hello(){
        return "hi"
    }
}
console.log(Block.hello())

