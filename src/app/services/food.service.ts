import { Injectable } from '@angular/core';

@Injectable()
export class FoodService {
  foodList =[
    {
      name: "botifarra",
      calories: 999
    },
    {
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
    window.setTimeout(() => {
      callback();
    }, 1000);
  }

}
