import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UiService } from '../../../services/ui.service';
import { Proyecto } from '../../../Interfaces/Proyecto';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent {
  @Input() proyecto: Proyecto = {parrafo: "", titulo: "", linkPag:"", imagen: {nombre: "", tipo: ""}}
  @Input() i: number = 0;
	@Output() onDeleteProject: EventEmitter<Proyecto> = new EventEmitter();
	@Output() onEditFormProject: EventEmitter<Proyecto> = new EventEmitter();
	imageSource: any;
	isLogged = false;

  constructor( 
		private uiService: UiService,
		private sanitizer: DomSanitizer,
    private tokenService: TokenService
	) {}

  ngOnInit() : void {
		this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.proyecto.imagen.base64}`);
		this.isLogged = this.tokenService.getToken() != null;
	}

  onDelete(proyecto:Proyecto){
    this.onDeleteProject.emit(proyecto)
  }

  public onEdit(proyecto:Proyecto) {
		this.onEditFormProject.emit(proyecto);
		this.uiService.toggleFormProject();
	}

}





