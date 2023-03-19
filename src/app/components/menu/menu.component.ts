import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  selector: 'app-menu'
})
export class MenuComponent implements OnInit {

  themeIcon = ''

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.setThemeIcon()
  }

  toggleTheme() {
    const theme = this.themeService.getTheme();
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    this.themeService.defineTheme(newTheme)
    this.setThemeIcon();
  }

  setThemeIcon() {
    const theme = this.themeService.getTheme();
    this.themeIcon = theme === 'dark' ? 'assets/icons/moon.svg' : 'assets/icons/sun.svg'
  }

  changeLanguage() {}

}