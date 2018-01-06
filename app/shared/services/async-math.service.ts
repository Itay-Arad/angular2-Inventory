import { Product } from "../models/product.model";

export class AsyncMathService {

    getPriceAverage(products: Product[], callback: (avg: number) => void): void {
        
        setTimeout(() => {

            let sum = 0;
            for(let i = 0; i < products.length; i++) {
                sum += products[i].unitPrice;
            }
            let avg = sum / products.length;
    
            callback(avg);

        }, 3000);
    }

    // (avg: number) => void
    // void ומחזירה number זהו טיפוס נתונים המתאר פונקציה המקבלת
}