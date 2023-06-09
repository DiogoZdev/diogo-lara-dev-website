import { Component } from "@angular/core";
import { recentPosts } from "./configuration/recent-posts";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {

  posts = recentPosts;
}