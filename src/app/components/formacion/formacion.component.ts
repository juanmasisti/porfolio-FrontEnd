import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Formacion } from '../../Interfaces/Formacion';
import { FormacionService } from '../../services/formacion.service';
import { UiService } from '../../services/ui.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {
  formaciones : Formacion[] = [];
  noFormacion : boolean = false;
	subscription?: Subscription;
	editar: boolean = false;
	formacionChosen: Formacion = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
	formacionEdit: Formacion = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
	isLogged = false
	
  constructor(  
		private formacionService: FormacionService,
		private uiService: UiService,
		private tokenService: TokenService
	) {}

	ngOnInit() {
		this.formacionService.get().subscribe((formaciones) => {
			this.formaciones = formaciones
			if (formaciones.length > 0) {
				this.formacionChosen = formaciones[0]
				this.noFormacion = false;
			} else {
				this.formacionChosen = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
				this.noFormacion = true;
			}
		})
		this.isLogged = this.tokenService.getToken() != null;
	}
	
	public toggleFormFormacion() {
		this.uiService.toggleFormFormacion();
		this.formacionEdit = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
	}

	public deleteFormacion(formacion: Formacion) {
		console.log(formacion)
		this.formacionService.delete(formacion.id!).subscribe(() => {
			if (this.formaciones.length == 1) 
				this.noFormacion = true;
			this.formaciones = this.formaciones.filter( ele => ele.id !== formacion.id )
		})
	}

	public editFormacion(formacion: Formacion) {
		this.formacionChosen = formacion;
		this.formacionService.edit(formacion).subscribe(() => {
			let i: number = this.formaciones.findIndex(ele => ele.id == formacion.id);
			this.formaciones[i] = formacion;
			this.ngOnInit()
		})
	}

	public addFormacion(formacion: Formacion) {
		this.formacionService.save(formacion).subscribe(() => {
			if (this.formaciones.length == 0) { 
				this.noFormacion = false;
			}
			this.formaciones.push(formacion)
			this.ngOnInit()
		});
	}

	public editFormFormacion(formacion: Formacion) {
		this.formacionEdit = formacion;
	}
	public getEducacion() : Formacion[] {
		return this.formaciones.filter(elem => elem.eleccion === "educacion");
	}

	public getExperiencia() : Formacion[] {
		return this.formaciones.filter(elem => elem.eleccion === "experiencia");
	}
}
	


