import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { SaberInglesComponent } from "./posts/saber-ingles/saber-ingles.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'saber-ingles',
    component: SaberInglesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }