import { Component, OnInit } from "@angular/core";

import {FoodService} from "../../services/food.service";

@Component({
  selector: "app-page-food-list",
  templateUrl: "./page-food-list.component.html",
  styleUrls: ["./page-food-list.component.css"]
})
export class PageFoodListComponent implements OnInit {


  loading = true;
  foodList = null;

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getAllFoods((data) => {
      this.foodList = data;
      this.loading = false;
    });
  }

  handleDeleteItem(item) {
    this.foodService.delete(item.id, () => {
      const index = this.foodList.indexOf(item);
      this.foodList.splice(index, 1);
    });
  }

  handleAdd(newFood) {
    this.foodService.create(newFood, () => {
      this.foodList.push(newFood);
    });
  }
}
