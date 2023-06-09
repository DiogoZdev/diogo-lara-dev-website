import { NgModule } from "@angular/core";
import { BlogComponent } from "./blog.component";
import { HeaderMiniModule } from "src/app/components/header-mini/header-mini.module";
import { BlogRoutingModule } from "./blog-routing.module";
import { PostCardModule } from "./components/post-card/post-card.module";
import { TranslateModule } from "src/app/utils/pipes/translate.module";
import { PostTopBarComponent } from "./components/post-top-bar/post-top-bar.component";
import { SaberInglesComponent } from "./posts/01-saber-ingles/saber-ingles.component";
import { CommonModule } from "@angular/common";
import { WhatToChooseComponent } from "./posts/02-what-to-choose/what-to-choose.component";

@NgModule({
  declarations: [
    BlogComponent,
    PostTopBarComponent,
    SaberInglesComponent,
    WhatToChooseComponent
  ],
  imports: [
    CommonModule,
    HeaderMiniModule,
    BlogRoutingModule,
    PostCardModule,
    TranslateModule,
  ]
})
export class BlogModule {}