export class Product {
    id!: string;
    sku: string | undefined;
    unit: string | undefined;
    name: string | undefined;
    unitPrice: number | undefined;
    imageUrl: string | undefined;
    active: boolean | undefined;;
    unitsInStock: number | undefined;;
    dateCreated: Date | undefined; ;
    lastUpdate: Date | undefined; 
}