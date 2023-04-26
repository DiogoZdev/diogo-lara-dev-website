import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-top-bar",
  templateUrl: "./post-top-bar.component.html",
  styleUrls: ["./post-top-bar.component.scss"],
})
export class PostTopBarComponent{

  constructor(
    private router: Router,
  ) { }

  goBack() {
    this.router.navigate(["blog"]);
  }

}
