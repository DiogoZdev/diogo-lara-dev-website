import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './components/about/about.module';
import { FormModule } from './components/form/form.module';
import { GradientLineModule } from './components/gradient-line/gradient-line.module';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { NetworkModule } from './components/network/network.module';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GradientLineModule,
    MenuModule,
    HeaderModule,
    AboutModule,
    FormModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
