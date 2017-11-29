import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PageFoodListComponent } from "./pages/page-food-list/page-food-list.component";
import { FoodAddFormComponent } from "./components/food-add-form/food-add-form.component";
import { FoodListComponent } from "./components/food-list/food-list.component";
import { FoodItemComponent } from "./components/food-item/food-item.component";

@NgModule({
  declarations: [
    AppComponent,
    PageFoodListComponent,
    FoodAddFormComponent,
    FoodListComponent,
    FoodItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
