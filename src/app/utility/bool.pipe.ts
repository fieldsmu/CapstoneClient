//Turns true/false from bool statements into Yes or No
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Yes": "No";
  }

}
