import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { SaberInglesComponent } from "./posts/01-saber-ingles/saber-ingles.component";
import { WhatToChooseComponent } from "./posts/02-what-to-choose/what-to-choose.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'saber-ingles',
    component: SaberInglesComponent
  },
  {
    path: 'choosing-technologies',
    component: WhatToChooseComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }