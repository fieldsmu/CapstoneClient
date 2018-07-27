import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

transform(objArr: any[], property: string, order: string = 'asc'): any {
    console.log("Sort:", objArr, property, order);
    let sorted = objArr.sort( (a,b): number => {
      if(a[property] === b[property]) return 0;
      if(order === 'desc') {
        return +(a[property] < b[property]);
      } else { 
        return +(a[property] > b[property]);
      }
    });

    return sorted;
  }
}