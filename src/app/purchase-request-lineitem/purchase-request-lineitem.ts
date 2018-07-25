import { PurchaseRequest } from "../purchase-request/purchase-request";
import { Product } from '../product/product';

export class PurchaseRequestLineitem {

	Id: number;
	Description: string = "N/A";
	Quantity: number;
	ProductId: number;
	Product: Product;
	PurchaseRequestId: number;
	PurchaseRequest: PurchaseRequest;

}