import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../Interfaces/Proyecto';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [];
  project: Proyecto = {id: 0, titulo: "",parrafo: "", linkPag: "", imagen: {nombre: "", tipo: ""}};
  subscription?: Subscription;
  isLogged: boolean = false;
  constructor(
    private uiService:UiService,
    private proyectoService: ProyectoService,
	private tokenService: TokenService,
  ) {}
 
  	ngOnInit() {
		this.proyectoService.get().subscribe((proyectos) => {	
		this.proyectos = proyectos})
	  // Verifica si esta logueado
	  this.isLogged = this.tokenService.getToken() != null;
	}

  	public toggleFormProject() {
		this.project = {titulo: "", parrafo: "", linkPag: "", imagen: {nombre: "", tipo: ""}};
		this.uiService.toggleFormProject();
	}

	public deleteProject(project: Proyecto) {
		this.proyectoService.delete(project.id!).subscribe(() => {
			this.proyectos = this.proyectos.filter( ele => ele.id !== project.id )
		})
	}

	public editProject(project: Proyecto) {
		this.proyectoService.edit(project).subscribe(() => {
			let i: number = this.proyectos.findIndex(ele => ele.id == project.id);
			this.proyectos[i] = project;
			this.ngOnInit()
		})
	}

	public addProject(project: Proyecto) {
		this.proyectoService.save(project).subscribe(() => {
			this.proyectos.push(project)
			this.ngOnInit()
		});
	}

	public editFormProject(project: Proyecto) {
		this.project = project;
	}
}