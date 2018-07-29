import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], property: string, order: string = 'asc'): any {
    console.log("Sort:", objArr, property, order);

    let sorted = objArr.sort((a,b): number => {

      let x=a[property];
      let y=b[property];

      if(typeof a[property] != "string") {
        a[property]=a[property].toString().toUpperCase();
      } else {
        a[property]=a[property].toUpperCase();
      }

      if(typeof b[property] != "string") {
        b[property]=b[property].toString().toUpperCase();
      } else {
        b[property]=b[property].toUpperCase();
      }

      if(a[property] === b[property]) {
        a[property]=x;
        b[property]=y;
        return 0;
      }

      if(order === 'desc') {
        let z = +(a[property]<b[property]) 
        a[property]=x;
        b[property]=y;
        return z;
       }
       else { 
         let z = +(a[property] > b[property])
        a[property]=x;
        b[property]=y;
        return z;
      }
    });

    console.log("Sorted: ",sorted);
    return sorted;
  }
}


