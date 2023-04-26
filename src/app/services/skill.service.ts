import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseDatos } from './baseDatos.service';

@Injectable({
	providedIn: 'root'
})
export class SkillService extends baseDatos {
	constructor(
		http:HttpClient
	) { 
		super(http)
		this.apiUrl += "skills";
	}
}