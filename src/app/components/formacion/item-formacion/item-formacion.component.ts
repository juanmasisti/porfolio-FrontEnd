import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Formacion } from 'src/app/Interfaces/Formacion';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-item-formacion',
  templateUrl: './item-formacion.component.html',
  styleUrls: ['./item-formacion.component.css']
})
export class ItemFormacionComponent {
  @Input() formacion: Formacion = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
	@Output() onDeleteFormacion: EventEmitter<Formacion> = new EventEmitter();
	@Output() onEditFormacion: EventEmitter<Formacion> = new EventEmitter();
	inicio: Date = new Date();
	fin: Date = new Date();
	imageSource: any;
	isLogged: boolean = false;

	constructor( 
		private uiService: UiService,
		private sanitizer: DomSanitizer,
		private tokenService: TokenService
	) {}

	ngOnInit() : void {
		this.isLogged = this.tokenService.getToken() != null
	}

	ngOnChanges() : void {
		this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.formacion.imagen.base64}`);
		this.inicio = new Date(this.formacion.fechaInicio);
		this.fin = new Date(this.formacion.fechaFin);
	}

	public onDelete(formacion: Formacion) {
		this.onDeleteFormacion.emit(formacion);
	}

	public onEdit(formacion: Formacion) {
		this.onEditFormacion.emit(formacion);
		this.uiService.toggleFormFormacion();
	}

	public getDate(): string {
		return this.inicio.toLocaleString("es-ES", { month: "long"})[0].toUpperCase() + this.inicio.toLocaleString("es-ES", { month: "long"}).slice(1) 
            + " " + this.inicio.getFullYear() + " - " + 
            this.fin.toLocaleString("es-ES", { month: "long"})[0].toUpperCase() + this.fin.toLocaleString("es-ES", { month: "long"}).slice(1) + " " + this.fin.getFullYear();
	}
}
