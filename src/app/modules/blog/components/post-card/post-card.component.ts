import { Component, Input, OnInit } from "@angular/core";
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

  public day = "";
  public month = "";
  public year = "";


  ngOnInit(): void {
      let date: string[] = [];
      if (this.postDate.includes("-")) date = this.postDate.split("-");
      if (this.postDate.includes("/")) date = this.postDate.split("/");

      if (date[0] > date[2]) {
        date = date.reverse();
      }

      console.log(date)

      this.day = date[0];
      this.month = date[1];
      this.year = date[2];
  }
}