import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product';
import {JsonResponse} from '../utility/json-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

url = "http://localhost:49332/Products/";

	list(): Observable<JsonResponse> {
		return this.http.get(this.url+"List") as Observable<JsonResponse>;
	}

	get(id: number) : Observable<JsonResponse> {
		return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
	}

	create(product: Product): Observable<JsonResponse> {
		return this.http.post(this.url+"Create",product) as Observable<JsonResponse>;
	}

	change(product: Product): Observable<JsonResponse> {
		return this.http.post(this.url+"Change",product) as Observable<JsonResponse>;
	}

	remove(product: Product): Observable<JsonResponse> {
		return this.http.post(this.url+"Remove",product) as Observable<JsonResponse>;
	}

  constructor(private http: HttpClient) { }
}
