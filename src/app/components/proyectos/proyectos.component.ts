import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { Proyecto } from '../../Interfaces/Proyecto';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [];
  project: Proyecto = {id: 0, titulo: "",parrafo: "", linkPag: "", img: {titulo: "", tipo: "", base64: ""}};
  subscription?: Subscription;
  estado: boolean = false;
  constructor(
    private uiService:UiService,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    // Like Promise
    this.proyectoService.get().subscribe((proyectos)=>(
      this.proyectos = proyectos
  ))};

  public toggleFormProject() {
		this.estado = !this.estado;
		this.project = {titulo: "", parrafo: "", linkPag: "", img: {titulo: "", tipo: "", base64: ""}};
		this.uiService.toggleFormProject();
	}

	public deleteProject(project: Proyecto) {
		this.proyectoService.delete(project).subscribe(() => {
			this.proyectos = this.proyectos.filter( ele => ele.id !== project.id )
		})
	}

	public editProject(project: Proyecto) {
		this.proyectoService.edit(project).subscribe(() => {
			let i: number = this.proyectos.findIndex(ele => ele.id == project.id);
			this.proyectos[i] = project;
		})
	}

	public addProject(project: Proyecto) {
		this.proyectoService.add(project).subscribe((project: Proyecto) => {
			this.proyectos.push(project)
		});
	}

	public editFormProject(project: Proyecto) {
		this.project = project;
	}
}