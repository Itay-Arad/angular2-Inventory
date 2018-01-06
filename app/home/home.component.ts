import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Title } from '@angular/platform-browser';
import { Category } from '../shared/models/category.model';

@Component({
    selector: 'jb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    discount = 10;
    currentDate = new Date();
    categories: Category[];

    constructor(
        private categoriesService: CategoriesService,
        private titleService: Title) { }

    ngOnInit(): void {
        this.categories = this.categoriesService.getCategories();
        this.titleService.setTitle("Northwind | Home");
    }
}
