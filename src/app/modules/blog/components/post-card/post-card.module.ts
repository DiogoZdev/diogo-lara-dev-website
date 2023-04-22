import { NgModule } from "@angular/core";
import { PostCardComponent } from "./post-card.component";
import { TranslateModule } from "src/app/utils/pipes/translate.module";

@NgModule({
  imports: [TranslateModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
})
export class PostCardModule {}