import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchFor: string): any[] {
    let srchProducts: Product[] = [];
    for(let product of products) {
      if(
        product.Vendor.Name.toUpperCase().includes(searchFor.toUpperCase()) || 
        product.Name.toUpperCase().includes(searchFor.toUpperCase()) ||
        product.PartNumber.toUpperCase().includes(searchFor.toUpperCase()) ||
        product.Name.toUpperCase().includes(searchFor.toUpperCase()) ||
        product.Unit.toUpperCase().includes(searchFor.toUpperCase()) ||
        product.Price.toString().includes(searchFor)
        ) {
        srchProducts.push(product);
      }
    }
    return srchProducts;
  }
}