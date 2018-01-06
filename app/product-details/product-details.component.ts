import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsService } from '../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    // route = המידע בנוגע לנתיב
    // router = פעולות על הנתיבים
    constructor(private productsService: ProductsService,
                private route: ActivatedRoute,
                private router: Router,
                /* private changeDetector: ChangeDetectorRef */) { }

    ngOnInit() {
        // בתוך this-היא שה inline functions-הבעיה שקיימת ב
        // של המחלקה שלנו this-הפונקציה, אינו ה

        // פתרונות: 

        // 1.
        // that לתוך משתנה מקומי בשם this-שמירת אובייקט ה
        // that-במשתנה ה inline-ואז שימוש בתוך פונקציית ה
        // let that = this;
        // this.route.params.subscribe(function(params){
        //     that.product = that.productsService.getProduct(params.id);
        // });

        // 2. 
        // של המחלקה this-ל inline-קישור פונצקיית ה
        // של הפונקציה להיות זהה לזה של המחלקה this-זה יגרום ל
        // this.route.params.subscribe(function(params){
        //     this.product = this.productsService.getProduct(params.id);
        // }.bind(this));

        // 3. 
        // Lambda Expression
        this.route.params.subscribe(params => 

            // הגירסה הסינכרונית:
            // this.product = this.productsService.getProduct(params.id)

            // הגירסה האסינכרונית:
            this.productsService.getProduct(params.id,
                product => {
                    this.product = product;
                    //this.changeDetector.detectChanges();
                })
        );
    }

    goBack(): void {
        this.router.navigate(["/products"]);
    }
}
