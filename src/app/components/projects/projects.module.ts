import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { TranslateModule } from "src/app/utils/pipes/translate.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}