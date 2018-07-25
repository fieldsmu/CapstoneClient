import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PurchaseRequest } from './purchase-request';
import {JsonResponse} from '../utility/json-response';

@Injectable({
	providedIn: 'root'
})

export class PurchaseRequestService {

	url="http://localhost:49332/PurchaseRequests/";

	// authenticate(): Observable<JsonResponse> {
	// 	return this.http.get(url+"Authenticate/"+username+"/"=password) as Observable<JsonResponse>;
	// }

	list(): Observable<JsonResponse> {
		//all of the service calls will look like the below with either get or post
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	get(id: number) : Observable<JsonResponse> {
		return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
	}

	// getByUserId(UserId: number) : Observable<JsonResponse> {
	// 	return this.http.get(this.url+"GetByUserId/"+id) as Observable<JsonResponse>;
	// }

	create(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
		return this.http.post(this.url+"Create",purchaserequest) as Observable<JsonResponse>;
	}

	change(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
		return this.http.post(this.url+"Change",purchaserequest) as Observable<JsonResponse>;
	}

	remove(purchaserequest: PurchaseRequest): Observable<JsonResponse> {
		return this.http.post(this.url+"Remove",purchaserequest) as Observable<JsonResponse>;
	}
	constructor(private http: HttpClient) { }
}
