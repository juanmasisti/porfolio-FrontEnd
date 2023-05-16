import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from '../Interfaces/Formacion';

@Injectable({
	providedIn: 'root'
})
export class FormacionService {
	url = 'https://backend-juei.onrender.com/formacion/'
	constructor(private httpClient:HttpClient) { 
	
	}
	
	public get(): Observable<Formacion[]>{
		return this.httpClient.get<Formacion[]>(this.url + "lista");
	}

	public save(formacion: Formacion):Observable<any>{
		console.log(formacion)
		return this.httpClient.post<any>(this.url + 'create', formacion);
	}

	public delete(id: number):Observable<any>{
		console.log(id)
		return this.httpClient.delete<any>(this.url + `delete/${id}`);
	}

	public edit(formacion: Formacion):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', formacion);
	}
}