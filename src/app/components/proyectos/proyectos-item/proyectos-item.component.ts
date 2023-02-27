import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Proyecto } from '../../Proyecto';
import { Proyectos } from '../../mock-proyectos';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent {
  @Input() proyecto: Proyecto = Proyectos[0]
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Proyecto> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {

  }

  onDelete(proyecto:Proyecto){
    this.onDeleteProyecto.emit(proyecto)
  }

  onToggle(proyecto:Proyecto){
    this.onToggleReminder.emit(proyecto)
  }

}
