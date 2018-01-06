
export class Product {
    constructor(public productID: number = 0,
        public productName: string = "",
        public unitPrice: number = 0,
        public unitsInStock: number = 0,
        public unitsOnOrder: number = 0){ }
}