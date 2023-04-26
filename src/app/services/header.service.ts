import { Injectable } from '@angular/core';
import { baseDatos } from '../services/baseDatos.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class HeaderService extends baseDatos{
    constructor(
        http:HttpClient
    ) { 
        super(http)
        this.apiUrl += "header";
    }
  }
