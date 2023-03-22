import { NgModule } from "@angular/core";
import { TranslateModule } from "src/app/utils/pipes/translate.module";
import { AboutComponent } from "./about.component";

@NgModule({
  imports: [TranslateModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {}