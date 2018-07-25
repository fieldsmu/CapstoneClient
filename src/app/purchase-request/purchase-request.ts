	import { User } from '../user/user';
	import { PurchaseRequestLineitem } from '../purchase-request-lineitem/purchase-request-lineitem';

export class PurchaseRequest {

	Id: number;
	Description: string;
	Justification: string;
	RejectionReason: string;
	DeliveryMode: string;
	Status: string;
	Total: number = 0;
	UserId: number;
	User: User;
	PurchaseRequestLineItems: PurchaseRequestLineitem[];
}
