import { User } from '../user/user';
import { PurchaseRequestLineItems } from '../purchase-request-lineitems/purchase-request-lineitems';

export class PurchaseRequest {

	Id: number;
	Description: string;
	Justification: string;
	RejectionReason: string;
	DeliveryMode: string;
	Status: string;
	Total: number;
	UserId: number;
	User: User;
	PurchaseRequestLineItems: PurchaseRequestLineItems[];
}
