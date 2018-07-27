import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchFor: string): any[] {
    let srchProducts: Product[] = [];
    for(let product of products) {
      if(product.Vendor.Name.includes(searchFor)
          || product.Name.includes(searchFor)
          || product.PartNumber.includes(searchFor)
          || product.Name.includes(searchFor)
          || product.Unit.includes(searchFor)
        ) {
        srchProducts.push(product);
      }
    }
    return srchProducts;
  }

}