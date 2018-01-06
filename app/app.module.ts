import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { SeasonDirective } from './shared/directives/season.directive';
import { ColoredDirective } from './shared/directives/colored.directive';
import { CategoriesService } from './shared/services/categories.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';
import { ZeroToSymbolPipe } from './shared/pipes/zero-to-symbol.pipe';
import { FormsModule } from "@angular/forms";
import { ProductImageComponent } from './product-image/product-image.component';
import { StockInOutComponent } from './stock-in-out/stock-in-out.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AsyncMathService } from './shared/services/async-math.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule, // Need this module for the routing
        AppRoutingModule // Import app routing module
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        YearSlogenPipe,
        SeasonDirective,
        ColoredDirective,
        ProductListComponent,
        ZeroToSymbolPipe,
        ProductImageComponent,
        StockInOutComponent,
        PageNotFoundComponent,
        ProductDetailsComponent
    ],
    providers: [ // Services עבור הגדרות
        CategoriesService,
        ProductsService,
        AsyncMathService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
