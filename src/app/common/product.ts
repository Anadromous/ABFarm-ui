import { Produce } from "./produce";

export class Product {
    id!: string;
    sku!: string;
    unit!: string;
    name!: string;
    description!: string;
    unitPrice!: number;
    imageUrl!: string;
    active!: boolean;;
    unitsInStock!: number;;
    dateCreated!: Date;;
    lastUpdate!: Date;
    category!: string;
}