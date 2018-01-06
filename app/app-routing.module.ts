import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

// הנתיבים השונים שקיימים באתר
const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

// אובייקט ראוטר - יודע איך להחליף את הקומפוננטות לפי הנתיבים
const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}