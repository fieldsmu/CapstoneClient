import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PurchaseRequestLineitem } from './purchase-request-lineitem';
import {JsonResponse} from '../utility/json-response';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestLineitemService {

	url="http://localhost:49332/PurchaseRequestLineitems/";

	list(): Observable<JsonResponse> {
		//all of the service calls will look like the below with either get or post
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	get(id: number) : Observable<JsonResponse> {
		return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
	}

	create(purchaserequestlineitem:PurchaseRequestLineitem): Observable<JsonResponse> {
		return this.http.post(this.url+"Create",purchaserequestlineitem) as Observable<JsonResponse>;
	}

	change(purchaserequestlineitem: PurchaseRequestLineitem): Observable<JsonResponse> {
		return this.http.post(this.url+"Change",purchaserequestlineitem) as Observable<JsonResponse>;
	}

	remove(purchaserequestlineitem: PurchaseRequestLineitem): Observable<JsonResponse> {
		return this.http.post(this.url+"Remove",purchaserequestlineitem) as Observable<JsonResponse>;
	}

	constructor(private http: HttpClient) { }
}