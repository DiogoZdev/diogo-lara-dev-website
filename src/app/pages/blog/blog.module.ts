import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { HeaderMiniModule } from "src/app/components/header-mini/header-mini.module";

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    HeaderMiniModule
  ]
})
export class BlogModule {}