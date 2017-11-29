import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  @Input() foods = null;
  @Output() onDelete = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  handleDelete(item) {
    this.onDelete.emit(item);
  }
}
