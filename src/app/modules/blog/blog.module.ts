import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { HeaderMiniModule } from "src/app/components/header-mini/header-mini.module";
import { BlogRoutingModule } from "./blog-routing.module";
import { PostCardModule } from "./components/post-card/post-card.module";
import { TranslateModule } from "src/app/utils/pipes/translate.module";

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    HeaderMiniModule,
    BlogRoutingModule,
    PostCardModule,
  ]
})
export class BlogModule {}