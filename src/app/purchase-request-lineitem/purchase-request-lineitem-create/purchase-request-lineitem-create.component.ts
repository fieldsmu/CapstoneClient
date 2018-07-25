import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product';
import { PurchaseRequestLineitem } from '../purchase-request-lineitem';
import { PurchaseRequestLineitemService } from '../purchase-request-lineitem.service'

@Component({
  selector: 'app-purchase-request-lineitem-create',
  templateUrl: './purchase-request-lineitem-create.component.html',
  styleUrls: ['./purchase-request-lineitem-create.component.css']
})
export class PurchaseRequestLineitemCreateComponent implements OnInit {

products: Product[];
purchaserequestlineitem: PurchaseRequestLineitem = new PurchaseRequestLineitem();

add(): void {
    this.purchaserequestlineitemsvc.create(this.purchaserequestlineitem) 
    .subscribe(resp => {
      this.purchaserequestlineitem = resp.Data;
      console.log(resp);
      this.router.navigateByUrl('/purchaserequests/lineitems/'+this.route.snapshot.params.id);
    });
}

title: string = "Purchase Request Lineitem Create";

  constructor(private route: ActivatedRoute, private systemsrv: SystemService, private router: Router, private productsvc: ProductService, private purchaserequestlineitemsvc: PurchaseRequestLineitemService) { }

  ngOnInit() {

    if(this.systemsrv.loggedInUser == null) {
      this.router.navigateByUrl('/users/login');
    }
    console.log("Logged-in user is: ",this.systemsrv.loggedInUser);

    let id = this.route.snapshot.params.id;
    console.log("id: ", id);
    this.purchaserequestlineitem.PurchaseRequestId = id;

      this.productsvc.list()
      .subscribe(resp => {
        this.products = resp.Data;
        console.log(resp);
      });

   }

}
