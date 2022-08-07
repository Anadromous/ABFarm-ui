import { Produce } from "./produce";

export class Product {
    id!: string;
    sku!: string;
    unit!: string;
    name!: string;
    description!: string;
    unitPounds!: number;
    imageUrl!: string;
    unitPrice!: number;;
    unitsInStock!: number;;
    dateCreated!: Date;;
    lastUpdate!: Date;
    category!: string;
}