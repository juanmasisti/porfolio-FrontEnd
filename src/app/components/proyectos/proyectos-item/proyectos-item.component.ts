import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UiService } from '../../../services/ui.service';
import { Proyecto } from '../../../Interfaces/Proyecto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent {
  @Input() proyecto: Proyecto = {parrafo: "", titulo: "", linkPag:"", img: {titulo:"",tipo:"", base64:""}}
  @Output() onDeleteProject: EventEmitter<Proyecto> = new EventEmitter();
	@Output() onEditFormProject: EventEmitter<Proyecto> = new EventEmitter();
  subscription? : Subscription;
  imageSource: any;
  estado: boolean = false;

  constructor( 
		private uiService: UiService,
		private sanitizer: DomSanitizer
	) {}

  ngOnInit() : void {
		this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.proyecto.img.base64}`);
    this.subscription = this.uiService.onToggleButton().subscribe((estado)=> this.estado = estado);
	}

  onDelete(proyecto:Proyecto){
    this.onDeleteProject.emit(proyecto)
  }

  public onEdit(proyecto:Proyecto) {
		this.onEditFormProject.emit(proyecto);
		this.uiService.toggleFormProject();
		this.uiService.toggleButton();
	}

}





