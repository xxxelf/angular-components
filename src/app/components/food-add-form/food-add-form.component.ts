import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-food-add-form",
  templateUrl: "./food-add-form.component.html",
  styleUrls: ["./food-add-form.component.css"]
})
export class FoodAddFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<object>();

  feedbacklEnabled= false;

  name = "";
  calories = "";

  constructor() {}

  ngOnInit() {
  }

  handleAdd(form) {
    this.feedbacklEnabled = true;

    if (form.valid) {
      const newFood = {
        name: this.name,
        calories: this.calories
      };
      this.onAdd.emit(newFood);
    }
  }

}
