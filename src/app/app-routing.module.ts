import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './modules/blog/blog.component';
import { SaberInglesComponent } from './modules/blog/posts/01-saber-ingles/saber-ingles.component';
import { WhatToChooseComponent } from './modules/blog/posts/02-what-to-choose/what-to-choose.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
