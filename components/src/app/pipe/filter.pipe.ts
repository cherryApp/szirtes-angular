import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key?: string): any[] {
    if (!value || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (key) {
      return value.filter( item => {
        return ('' + item[key]).toLowerCase().includes(phrase);
      });
    }

    return value.filter( item => {
      const jsonItem = JSON.stringify(item).toLowerCase();
      return jsonItem.includes(phrase);
    });
  }

}
