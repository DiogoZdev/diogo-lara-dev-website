import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
  checkLanguage() {
    const lang = localStorage.getItem("language");
    if (!lang || !['POR','ENG','ESP'].includes(lang)) {
      this.setLanguage('PORT')
    }
  }

  setLanguage(lang: 'PORT'|'ENG'|'ESP') {
    localStorage.setItem("language", lang)
  }
}