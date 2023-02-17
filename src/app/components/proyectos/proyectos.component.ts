import { Component, OnInit, Input } from '@angular/core';
import {Proyecto} from '../Task'
import {Proyectos} from '../mock-task'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = Proyectos;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("toggleAddTask!");
  }

}
