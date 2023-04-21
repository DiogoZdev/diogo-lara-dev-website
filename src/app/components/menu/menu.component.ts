import { Component, OnInit } from "@angular/core";
import { LanguageService } from "src/app/services/language.service";
import { ThemeService } from "src/app/services/theme.service";
import { ILanguage, Language } from "./types/languages";
import { Router } from "@angular/router";

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  selector: 'app-menu'
})
export class MenuComponent implements OnInit {

  themeIcon = ''

  languages: ILanguage[] = [
    { code: Language.PORT, name: 'Português' },
    { code: Language.ENG, name: 'English' },
    { code: Language.ESP, name: 'Español' },
  ];

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private router: Router,
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

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang)
  }

  navigate(page: string) {
    this.router.navigate([page])
  }
}
