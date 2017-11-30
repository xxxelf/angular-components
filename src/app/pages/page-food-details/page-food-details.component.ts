import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-food-details",
  templateUrl: "./page-food-details.component.html",
  styleUrls: ["./page-food-details.component.css"]
})
export class PageFoodDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });
  }
}
