import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { PageFoodListComponent } from "./pages/page-food-list/page-food-list.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { PageFoodDetailsComponent } from "./pages/page-food-details/page-food-details.component";

import { FoodAddFormComponent } from "./components/food-add-form/food-add-form.component";
import { FoodListComponent } from "./components/food-list/food-list.component";
import { FoodItemComponent } from "./components/food-item/food-item.component";

import { FoodService } from "./services/food.service";

const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "food",  component: PageFoodListComponent },
  { path: "food/:id", component: PageFoodDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageFoodListComponent,
    FoodAddFormComponent,
    FoodListComponent,
    FoodItemComponent,
    PageHomeComponent,
    PageFoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
