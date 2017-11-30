import { Injectable } from "@angular/core";

@Injectable()
export class FoodService {
  foodList = [
    {
      id: 1,
      name: "botifarra",
      calories: 999
    },
    {
      id: 2,
      name: "pizza",
      calories: 405
    }
  ];

  constructor() { }

  getAllFoods(callback) {
    window.setTimeout(() => {
      callback(this.foodList);
    }, 1000);
  }

  delete(id, callback) {
    window.setTimeout(() => {
      callback();
    }, 1000);
  }

  create(newFood, callback) {
    newFood.id = Math.floor(Math.random() * 1000000);
    window.setTimeout(() => {
      callback();
    }, 1000);
  }

}
