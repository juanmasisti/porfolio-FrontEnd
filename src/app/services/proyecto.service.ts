import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import {Proyecto} from '../components/Proyecto';
import {Proyectos} from '../components/mock-proyectos'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:3000/Proyectos'

  constructor(
    private http:HttpClient
  ) { }

  getProyecto(): Observable<any[]>{

    return this.http.get<any[]>(this.apiUrl)
  }

  deleteProyecto(proyecto:Proyecto): Observable<Proyecto>{
    const url =`${this.apiUrl}/${proyecto.id}`
    return this.http.delete<Proyecto>(url)
  }

  addProject(proyecto:Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

}
