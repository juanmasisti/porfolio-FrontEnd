import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import {Proyecto} from '../Proyecto';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [];

  showAddProject: boolean = true;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private proyectoService: ProyectoService
  ) { 
    this.subscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddProject = value)
  }

  ngOnInit(): void {
    // Like Promise
    this.proyectoService.getProyecto().subscribe((proyectos)=>(
      this.proyectos = proyectos
  ))};

  deleteProyecto(proyecto:Proyecto){
    this.proyectoService.deleteProyecto(proyecto)
    .subscribe(
      () => {
      this.proyectos = this.proyectos.filter( (t) => t.id !== proyecto.id)
    })
  }

  toggleReminder(proyecto:Proyecto){
    proyecto.reminder = !proyecto.reminder
    console.log(proyecto)
  }

  addProject(proyecto:Proyecto){
    this.proyectoService.addProject(proyecto).subscribe((proyecto) => (
      this.proyectos.push(proyecto)
    ))
  }

  toggleAddProject(){
    this.uiService.toggleAddProject();
  }

}
