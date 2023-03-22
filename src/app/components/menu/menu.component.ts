import { Component, OnInit } from "@angular/core";
import { LanguageService } from "src/app/services/language.service";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  selector: 'app-menu'
})
export class MenuComponent implements OnInit {

  themeIcon = ''

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
  ) {}

  ngOnInit() {
    this.setThemeIcon();
    this.languageService.checkLanguage();
  }

  toggleTheme() {
    const theme = this.themeService.getTheme();
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    this.themeService.defineTheme(newTheme)
    this.setThemeIcon();
  }

  setThemeIcon() {
    const theme = this.themeService.getTheme();
    this.themeIcon = theme === 'dark' ? 'assets/icons/sun.svg' : 'assets/icons/moon.svg'
  }

  setLanguage(lang: 'ENG'|'ESP'|'PORT') {
    this.languageService.setLanguage(lang)
  }

}
