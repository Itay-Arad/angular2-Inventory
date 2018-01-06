import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product.model';
import { AsyncMathService } from '../shared/services/async-math.service';

@Component({
    selector: 'jb-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    fontSize = 20;
    clickedImageSource: string;

    constructor(private productsService: ProductsService,
                private asyncMathService: AsyncMathService) { }

    ngOnInit() {
        // הגירסה הסינכרונית
        // this.products = this.productsService.getProducts();

        // הגירסה האסינכרונית
        this.productsService.getProducts(
            products => this.products = products);
    }

    showAveragePrice(): void {
        this.asyncMathService.getPriceAverage(
            this.products, avg => alert("Average Price: " + avg));
        alert("Done.");
    }

    
    showImage(imageSource: string): void {
        // 5. שימוש במידע שדווח ע"י הארוע
        this.clickedImageSource = imageSource;
    }
}