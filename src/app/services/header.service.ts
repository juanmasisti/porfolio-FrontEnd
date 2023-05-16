import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Header } from '../Interfaces/Header';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class HeaderService {
    url = 'http://localhost:8080/header/';

	constructor(private httpClient:HttpClient) {}

	public get(): Observable<Header[]>{
		return this.httpClient.get<Header[]>(this.url + "lista");
	}

	public edit(header: Header):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', header);
	}
  }
