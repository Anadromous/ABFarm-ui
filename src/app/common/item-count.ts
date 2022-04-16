export class ItemCount {
    itemId!: string;
    itemCount: number = 0;

    constructor(itemId: string, itemCount: number){
        this.itemId= itemId;
        this.itemCount=itemCount;
    }
}
