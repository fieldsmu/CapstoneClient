import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseRequest } from '../purchase-request/purchase-request';

@Pipe({
  name: 'searchPurchaseRequestReview'
})
export class SearchPurchaseRequestReviewPipe implements PipeTransform {

  transform(purchaseRequestReviews: PurchaseRequest[], searchFor: string): any[] {
    let srchPurchaseRequests: PurchaseRequest[] = [];
    for(let purchaseRequest of purchaseRequestReviews) {
      if(
        purchaseRequest.Description.toUpperCase().includes(searchFor.toUpperCase()) || 
        purchaseRequest.Justification.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.DeliveryMode.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.Total.toString().includes(searchFor) ||
        purchaseRequest.PRUser.includes(searchFor)
        ) {
        srchPurchaseRequests.push(purchaseRequest);
      }
    }
    return srchPurchaseRequests;
  }

}