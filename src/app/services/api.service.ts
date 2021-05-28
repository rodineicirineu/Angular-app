import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUse} from '../model/live.model'

@Injectable({
  providedIn: 'root'
})
export class apiService {  

  apiClient = 'https://foop-delivery-api.herokuapp.com/client';
  apiDelivery = 'https://foop-delivery-api.herokuapp.com/delivery';

  constructor(private http: HttpClient) {}
 
  listarClient() {
    return this.http.get<any[]>(`${this.apiClient}`)
  }
  
  listarDelivery (){
   return this.http.get<any[]>(`${this.apiDelivery}`)
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.apiClient, request);
  }

  deleteUser(id: any): Observable<any> {
    const _url = `${this.apiClient}/${id}`
    return this.http.delete<any>(_url)
  }

  getUser(id: any): Observable<ResponseUse> {
    const _url = `${this.apiClient}/${id}`
    return this.http.get<ResponseUse>(_url);
  }

  updateUser(id: any, request: RequestUpdate) {
    const _url = `${this.apiClient}/${id}`
    return this.http.put<any>(_url, request)
  }

 }