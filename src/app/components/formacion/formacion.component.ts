import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Formacion } from 'src/app/Interfaces/Formacion';
import { FormacionService } from '../../services/formacion.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {
  formaciones : Formacion[] = [];
	subscription?: Subscription;
	editar: boolean = false;
	formacion: Formacion = {titulo: "", parrafo: "",  eleccion: "", periodo: {inicio: "", fin: ""}, img: {titulo:"",tipo:"", base64:""}};
	estado: boolean = false

  constructor(
		private formacionService: FormacionService,
		private uiService: UiService,
	) {}

	ngOnInit() {
		this.formacionService.get().subscribe((formaciones) => {	
			this.formaciones = formaciones
		})
		this.subscription = this.uiService.onToggleButton().subscribe((estado)=> this.estado = estado);
	}
	
	public toggleFormFormacion() {
		this.formacion = {titulo: "", parrafo: "",  eleccion: "", periodo: {inicio: "", fin: ""}, img: {titulo:"",tipo:"", base64:""}};
		this.uiService.toggleFormFormacion();
		this.uiService.toggleButton();
	}

	public deleteFormacion(Formacion: Formacion) {
		this.formacionService.delete(Formacion).subscribe(() => {
			this.formaciones = this.formaciones.filter( ele => ele.id !== Formacion.id )
		})
	}

	public editFormacion(Formacion: Formacion) {
		this.formacionService.edit(Formacion).subscribe(() => {
			let i: number = this.formaciones.findIndex(ele => ele.id == Formacion.id);
			this.formaciones[i] = Formacion;
		})
	}

	public addFormacion(Formacion: Formacion) {
		this.formacionService.add(Formacion).subscribe((Formacion: Formacion) => {
			this.formaciones.push(Formacion)
		});
	}
	
	public getEducacion() : Formacion[] {
		return this.formaciones.filter(elem => elem.eleccion === "educacion");
	}

	public getExperiencia() : Formacion[] {
		return this.formaciones.filter(elem => elem.eleccion === "experiencia");
	}

	public editFormFormacion(formacion: Formacion) {
		this.formacion = formacion;
	}
	

}
