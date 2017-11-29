import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-food-item",
  templateUrl: "./food-item.component.html",
  styleUrls: ["./food-item.component.css"]
})
export class FoodItemComponent implements OnInit {
  @Input() food = null;
  @Output() onDelete = new EventEmitter<null>();
  constructor() {}

  ngOnInit() {}

  handleDelete() {
    this.onDelete.emit();
  }
}
