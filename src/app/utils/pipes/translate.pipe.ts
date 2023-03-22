import { Pipe, PipeTransform } from '@angular/core';
import * as i18n from '../../../assets/i18n/i18n.json';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  /**
   * Método de tradução de chave sem aninhamento.
   * @param key chave de tradução
   * @returns valor traduzido
   */
  transform(key: any ) {
    let json = JSON.parse(JSON.stringify(i18n));
    const language = localStorage.getItem('language')?.toUpperCase() as any;
    const keyArr = key.split('.');

    if (keyArr.length > 1) {
      keyArr.forEach((k: string) => {
				// validates if it doesnt crash
        if (json[k] !== undefined) {
          json = json[k]; 
        }
      })
    } else {
      // validates if it doesnt crash
      if (json[key] !== undefined)
      json = json[key];
    }      

    if (json[language] === undefined ) {
      return `? [${key}]`;
    } else {
      return json[language];
    }
  }
}