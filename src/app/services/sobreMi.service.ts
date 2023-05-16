import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SobreMi } from '../Interfaces/SobreMi';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SobreMiService {
	url = 'http://localhost:8080/sobremi/';

	constructor(private httpClient:HttpClient) {}

	public get(): Observable<SobreMi[]>{
		return this.httpClient.get<SobreMi[]>(this.url + "lista");
	}

	public save(sobremi: SobreMi):Observable<any>{
		return this.httpClient.post<any>(this.url + 'create', sobremi);
	}

	public delete(id: number):Observable<any>{
		return this.httpClient.delete<any>(this.url + `delete/${id}`);
	}

	public edit(sobremi: SobreMi):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', sobremi);
	}
}