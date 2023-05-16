import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/Skill';


@Injectable({
	providedIn: 'root'
})
export class SkillService {
	url = 'http://localhost:8080/habilidad/';

	constructor(private httpClient:HttpClient) {}

	public get(): Observable<Skill[]>{
		return this.httpClient.get<Skill[]>(this.url + "lista");
	}

	public save(skill: Skill):Observable<any>{
		return this.httpClient.post<any>(this.url + 'create', skill);
	}

	public delete(id: number):Observable<any>{
		return this.httpClient.delete<any>(this.url + `delete/${id}`);
	}

	public edit(skill: Skill):Observable<any>{
		return this.httpClient.put<any>(this.url + 'update', skill);
	}
}