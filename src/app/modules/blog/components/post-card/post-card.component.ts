import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Language } from "src/app/components/menu/types/languages";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {

  @Input() postTitle!: string;
  @Input() postLanguage!: string;
  @Input() postDate!: string;
  @Input() postPreview!: string;
  @Input() postUrl!: string;

  public day = "";
  public month = "";
  public year = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let date: string[] = [];
    if (this.postDate.includes("-")) date = this.postDate.split("-");
    if (this.postDate.includes("/")) date = this.postDate.split("/");

    if (Number(date[0]) > Number(date[2])) {
      date = date.reverse();
    }

    [this.day, this.month, this.year] = [date[0], date[1], date[2]];
  }

  openPost(url: string) {
    this.router.navigate([`blog/${url}`]);
  }
}