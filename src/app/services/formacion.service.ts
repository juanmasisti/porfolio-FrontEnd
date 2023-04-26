import { Injectable } from '@angular/core';
import { baseDatos } from './baseDatos.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class FormacionService extends baseDatos{
	constructor(
		http:HttpClient
	) { 
		super(http)
		this.apiUrl += "formacion";
	}
}