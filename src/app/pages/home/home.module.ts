import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { AboutModule } from "src/app/components/about/about.module";
import { HeaderModule } from "src/app/components/header/header.module";
import { ProjectsModule } from "src/app/components/projects/projects.module";

@NgModule({
  imports: [
    HeaderModule,
    ProjectsModule,
    AboutModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule{}