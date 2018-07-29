import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseRequest } from '../purchase-request/purchase-request';

@Pipe({
  name: 'searchPurchaseRequest'
})
export class SearchPurchaseRequestPipe implements PipeTransform {


  transform(purchaseRequests: PurchaseRequest[], searchFor: string): any[] {
    let srchPurchaseRequests: PurchaseRequest[] = [];
    for(let purchaseRequest of purchaseRequests) {
      if(
        purchaseRequest.Description.toUpperCase().includes(searchFor.toUpperCase()) || 
        purchaseRequest.Justification.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.RejectionReason.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.DeliveryMode.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.Status.toUpperCase().includes(searchFor.toUpperCase()) ||
        purchaseRequest.Total.toString().includes(searchFor)
        //||purchaseRequest.Active.toString().includes(searchFor)
        ) {
        srchPurchaseRequests.push(purchaseRequest);
      }
    }
    return srchPurchaseRequests;
  }

}