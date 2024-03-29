import { Product } from "./product";

export class CartItem {
    id!: string;
    name!: string;
    description!: string;
    imageUrl!: string;
    unitPrice!: number;
    unitPounds!: number;
    quantity!: number;
    categoryId: string;

    constructor(product: Product){
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice;
        this.unitPounds = product.unitPounds;
        this.quantity = 1;
        this.categoryId = product.categoryId;
    }

}
