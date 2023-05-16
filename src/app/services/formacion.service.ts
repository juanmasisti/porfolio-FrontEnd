import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from '../Interfaces/Formacion';

@Injectable({
	providedIn: 'root'
})
export class FormacionService {
	url = 'http://localhost:8080/formacion/'
	constructor(private httpClient:HttpClient) { 
	
	}
	
	public get(): Observable<Formacion[]>{
		return this.httpClient.get<Formacion[]>(this.url + "lista");
	}

	public save(formacion: Formacion):Observable<any>{
		return this.httpClient.post<any>(this.url + 'create', formacion);
	}

	public delete(id: number):Observable<any>{
		return this.httpClient.delete<any>(this.url + `delete/${id}`);
	}

	public edit(formacion: Formacion):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', formacion);
	}
}