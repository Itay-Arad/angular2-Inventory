import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable() // Needed for using the DI inside our service!
export class ProductsService {

    // זהו שירות של אנגולר המסוגל לגלוש לשרת מרוחק HttpClient
    // שירות זה הינו אסינכרוני
    constructor(private httpService: HttpClient){}

    // הגירסה האסינכרונית של הפונקציות
    getProduct(id: number, 
        callback: (product: Product) => void): void {
        this.getProducts(products => {
            for(let i = 0; i < products.length; i++) {
                if(products[i].productID == id) {
                    callback(products[i]);
                    return;
                }
            }
            callback(null);
        });
    }

    getProducts(callback: (products: Product[]) => void): void {
        // פנייה לשרת מרוחק, הבאת המוצרים ממנו
        this.httpService
            .get("/assets/api/products.json")
            .subscribe(callback);
    }

    // הגרסה הסינכרונית של הפונקציות
    // getProduct(id: number): Product {
    //     let products = this.getProducts();
    //     for(let i = 0; i < products.length; i++) {
    //         if(products[i].productID == id) {
    //             return products[i];
    //         }
    //     }
    //     return null;
    // }

    // getProducts(): Product[] {
    //     let products = new Array<Product>();
    //     products.push(new Product(1, "Chai", 18.00, 39, 0));
    //     products.push(new Product(2, "Chang", 19.00, 17, 40));
    //     products.push(new Product(3, "Aniseed Syrup", 10.00, 13, 70));
    //     products.push(new Product(4, "Chef Anton's Cajun Seasoning", 22.00, 53, 0));
    //     products.push(new Product(5, "Chef Anton's Gumbo Mix", 21.35, 0, 0));
    //     products.push(new Product(6, "Grandma's Boysenberry Spread", 25.00, 120, 0));
    //     products.push(new Product(7, "Uncle Bob's Organic Dried Pears", 30.00, 15, 0));
    //     products.push(new Product(8, "Northwoods Cranberry Sauce", 40.00, 6, 0));
    //     products.push(new Product(9, "Mishi Kobe Niku", 97.00, 29, 0));
    //     products.push(new Product(10, "Ikura", 31.00, 31, 0));
    //     products.push(new Product(11, "Queso Cabrales", 21.00, 22, 30));
    //     products.push(new Product(12, "Queso Manchego La Pastora", 38.00, 86, 0));
    //     products.push(new Product(13, "Konbu", 6.00, 24, 0));
    //     products.push(new Product(14, "Tofu", 23.25, 35, 0));
    //     products.push(new Product(15, "Genen Shouyu", 15.50, 39, 0));
    //     products.push(new Product(16, "Pavlova", 17.45, 29, 0));
    //     products.push(new Product(17, "Alice Mutton", 39.00, 0, 0));
    //     products.push(new Product(18, "Carnarvon Tigers", 62.50, 42, 0));
    //     products.push(new Product(19, "Teatime Chocolate Biscuits", 9.20, 25, 0));
    //     products.push(new Product(20, "Sir Rodney's Marmalade", 81.00, 40, 0));
    //     products.push(new Product(21, "Sir Rodney's Scones", 10.00, 3, 40));
    //     products.push(new Product(22, "Gustaf's Knäckebröd", 21.00, 104, 0));
    //     products.push(new Product(23, "Tunnbröd", 9.00, 61, 0));
    //     products.push(new Product(24, "Guaraná Fantástica", 4.50, 20, 0));
    //     products.push(new Product(25, "NuNuCa Nuß-Nougat-Creme", 14.00, 76, 0));
    //     products.push(new Product(26, "Gumbär Gummibärchen", 31.23, 15, 0));
    //     products.push(new Product(27, "Schoggi Schokolade", 43.90, 49, 0));
    //     products.push(new Product(28, "Rössle Sauerkraut", 45.60, 26, 0));
    //     products.push(new Product(29, "Thüringer Rostbratwurst", 123.79, 0, 0));
    //     products.push(new Product(30, "Nord-Ost Matjeshering", 25.89, 10, 0));
    //     products.push(new Product(31, "Gorgonzola Telino", 12.50, 0, 70));
    //     products.push(new Product(32, "Mascarpone Fabioli", 32.00, 9, 40));
    //     products.push(new Product(33, "Geitost", 2.50, 112, 0));
    //     products.push(new Product(34, "Sasquatch Ale", 14.00, 111, 0));
    //     products.push(new Product(35, "Steeleye Stout", 18.00, 20, 0));
    //     products.push(new Product(36, "Inlagd Sill", 19.00, 112, 0));
    //     products.push(new Product(37, "Gravad lax", 26.00, 11, 50));
    //     products.push(new Product(38, "Côte de Blaye", 263.50, 17, 0));
    //     products.push(new Product(39, "Chartreuse verte", 18.00, 69, 0));
    //     products.push(new Product(40, "Boston Crab Meat", 18.40, 123, 0));
    //     products.push(new Product(41, "Jack's New England Clam Chowder", 9.65, 85, 0));
    //     products.push(new Product(42, "Singaporean Hokkien Fried Mee", 14.00, 26, 0));
    //     products.push(new Product(43, "Ipoh Coffee", 46.00, 17, 10));
    //     products.push(new Product(44, "Gula Malacca", 19.45, 27, 0));
    //     products.push(new Product(45, "Rogede sild", 9.50, 5, 70));
    //     products.push(new Product(46, "Spegesild", 12.00, 95, 0));
    //     products.push(new Product(47, "Zaanse koeken", 9.50, 36, 0));
    //     products.push(new Product(48, "Chocolade", 12.75, 15, 70));
    //     products.push(new Product(49, "Maxilaku", 20.00, 10, 60));
    //     products.push(new Product(50, "Valkoinen suklaa", 16.25, 65, 0));
    //     products.push(new Product(51, "Manjimup Dried Apples", 53.00, 20, 0));
    //     products.push(new Product(52, "Filo Mix", 7.00, 38, 0));
    //     products.push(new Product(53, "Perth Pasties", 32.80, 0, 0));
    //     products.push(new Product(54, "Tourtière", 7.45, 21, 0));
    //     products.push(new Product(55, "Pâté chinois", 24.00, 115, 0));
    //     products.push(new Product(56, "Gnocchi di nonna Alice", 38.00, 21, 10));
    //     products.push(new Product(57, "Ravioli Angelo", 19.50, 36, 0));
    //     products.push(new Product(58, "Escargots de Bourgogne", 13.25, 62, 0));
    //     products.push(new Product(59, "Raclette Courdavault", 55.00, 79, 0));
    //     products.push(new Product(60, "Camembert Pierrot", 34.00, 19, 0));
    //     products.push(new Product(61, "Sirop d'érable", 28.50, 113, 0));
    //     products.push(new Product(62, "Tarte au sucre", 49.30, 17, 0));
    //     products.push(new Product(63, "Vegie-spread", 43.90, 24, 0));
    //     products.push(new Product(64, "Wimmers gute Semmelknödel", 33.25, 22, 80));
    //     products.push(new Product(65, "Louisiana Fiery Hot Pepper Sauce", 21.05, 76, 0));
    //     products.push(new Product(66, "Louisiana Hot Spiced Okra", 17.00, 4, 100));
    //     products.push(new Product(67, "Laughing Lumberjack Lager", 14.00, 52, 0));
    //     products.push(new Product(68, "Scottish Longbreads", 12.50, 6, 10));
    //     products.push(new Product(69, "Gudbrandsdalsost", 36.00, 26, 0));
    //     products.push(new Product(70, "Outback Lager", 15.00, 15, 10));
    //     products.push(new Product(71, "Flotemysost", 21.50, 26, 0));
    //     products.push(new Product(72, "Mozzarella di Giovanni", 34.80, 14, 0));
    //     products.push(new Product(73, "Röd Kaviar", 15.00, 101, 0));
    //     products.push(new Product(74, "Longlife Tofu", 10.00, 4, 20));
    //     products.push(new Product(75, "Rhönbräu Klosterbier", 7.75, 125, 0));
    //     products.push(new Product(76, "Lakkalikööri", 18.00, 57, 0));
    //     products.push(new Product(77, "Original Frankfurter grüne Soße", 13.00, 32, 0));
    //     return products;
    // }
}