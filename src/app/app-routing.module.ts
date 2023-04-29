import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './modules/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    component: ErrorComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
