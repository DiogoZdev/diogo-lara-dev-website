import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = "dark"

  defineTheme(theme: string) {
    localStorage.setItem("theme", theme);
    this.setAppTheme(theme);
  }

  getLocalStorageTheme() {
    const definedLocalTheme = localStorage.getItem("theme");
    if (definedLocalTheme) this.theme = definedLocalTheme;
    this.setAppTheme(this.theme)
  }

  getTheme() {
    return this.theme;
  }

  setAppTheme(theme: string) {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");

    document.body.classList.add(theme);
    this.theme = theme;
  }


}