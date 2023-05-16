import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../Interfaces/Proyecto';

@Injectable({
	providedIn: 'root'
})
export class ProyectoService{
	url = 'https://backend-juei.onrender.com/proyecto/';

	constructor(private httpClient:HttpClient) {}

	public get(): Observable<Proyecto[]>{
		return this.httpClient.get<Proyecto[]>(this.url + "lista");
	}

	public save(proyecto: Proyecto):Observable<any>{
		return this.httpClient.post<any>(this.url + 'create', proyecto);
	}

	public delete(id: number):Observable<any>{
		return this.httpClient.delete<any>(this.url + `delete/${id}`);
	}

	public edit(proyecto: Proyecto):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', proyecto);
	}
}