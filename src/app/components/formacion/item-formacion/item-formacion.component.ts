import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Formacion } from 'src/app/Interfaces/Formacion';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-formacion',
  templateUrl: './item-formacion.component.html',
  styleUrls: ['./item-formacion.component.css']
})
export class ItemFormacionComponent {
  @Input() formacion: Formacion = {titulo: "", parrafo: "", periodo: {inicio: "", fin: ""}, eleccion: "", img: {titulo: "", tipo: "", base64:""}};
	@Output() onDeleteFormacion: EventEmitter<Formacion> = new EventEmitter();
	@Output() onEditFormacion: EventEmitter<Formacion> = new EventEmitter();
	inicio: Date = new Date();
	fin: Date = new Date();
	imageSource: any;
	subscription?: Subscription;
	estado: boolean = false;

	constructor( 
		private uiService: UiService,
		private sanitizer: DomSanitizer
	) {}

	ngOnInit() : void {
		this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.formacion.img.base64}`);
		this.inicio = new Date(this.formacion.periodo.inicio);
		this.fin = new Date(this.formacion.periodo.fin);
		this.subscription = this.uiService.onToggleButton().subscribe((estado)=> this.estado = estado);
	}

	public onDelete(formacion: Formacion) {
		this.onDeleteFormacion.emit(formacion);
	}

	public onEdit(formacion: Formacion) {
		this.onEditFormacion.emit(formacion);
		this.uiService.toggleFormFormacion();
		this.uiService.toggleButton();
	}

	public getDate(): string {
		return this.inicio.toLocaleString("es-ES", { month: "long"})[0].toUpperCase() + this.inicio.toLocaleString("es-ES", { month: "long"}).slice(1) 
            + " " + this.inicio.getFullYear() + " - " + 
            this.fin.toLocaleString("es-ES", { month: "long"})[0].toUpperCase() + this.fin.toLocaleString("es-ES", { month: "long"}).slice(1) + " " + this.fin.getFullYear();
	}
}
