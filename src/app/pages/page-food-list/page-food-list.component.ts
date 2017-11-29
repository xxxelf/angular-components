import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-food-list",
  templateUrl: "./page-food-list.component.html",
  styleUrls: ["./page-food-list.component.css"]
})
export class PageFoodListComponent implements OnInit {
  foodList = [
    {
      name: "botifarra",
      calories: 999
    },
    {
      name: "pizza",
      calories: 405
    }
  ];

  constructor() {}

  ngOnInit() {}

  handleDeleteItem(item) {
    const index = this.foodList.indexOf(item);
    this.foodList.splice(index, 1);
  }
}
