import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Formacion } from '../../../Interfaces/Formacion';

@Component({
  selector: 'app-add-formacion',
  templateUrl: './add-formacion.component.html',
  styleUrls: ['./add-formacion.component.css']
})
export class AddFormacionComponent {
  @Output() onAddFormacion: EventEmitter<Formacion> = new EventEmitter();
	@Output() onEditFormacion: EventEmitter<Formacion> = new EventEmitter();
	@Output() onToggleFormFormacion: EventEmitter<Event> = new EventEmitter();
	@Input() formacion: Formacion = {titulo: "", parrafo: "",  fechaInicio: new Date(),fechaFin: new Date(), eleccion : "", imagen: {nombre: "", tipo: ""}};
	showFormFormacion: boolean = false;
	subscription?: Subscription;
	form: FormGroup;

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder
  ) { 
    this.subscription = this.uiService.onToggleFormFormacion().subscribe( value => this.showFormFormacion = value );
		this.form = this.formBuilder.group({
			id: [],
			titulo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			parrafo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			fechaInicio: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			fechaFin: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			imagen: this.formBuilder.group({
				nombre: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
				tipo: new FormControl('', {updateOn: 'blur'}),
				base64: new FormControl('', {updateOn: 'blur'})
			}),
      		eleccion: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
		})
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['formacion']?.currentValue)  {
			this.form?.patchValue(this.formacion);
		}
	}

	get Titulo(){
		return this.form.get("titulo");
	}

	get Parrafo(){
		return this.form.get("parrafo");
	}
		
	get Inicio(){
		return this.form.get("fechaInicio");	
	}

	get Fin(){
		return this.form.get("fechaFin");	
	}

	get Imagen(){
		return this.form.get("imagen")?.get("nombre");	
	}
  	get eleccion(){
		return this.form.get("eleccion");
	}

	public onClose(): void {
		this.onToggleFormFormacion.emit();
		this.form.reset();
	}

	public onFileSelected(event: any) {
		const file:File = event.target.files[0];
		const reader = new FileReader;
		if (file) {
			reader.readAsDataURL(file);
				reader.onload = () => {
					this.form.patchValue({
						imagen: {
							nombre: file.name,
							tipo: file.type.split('/')[1],
							base64: reader.result?.toString().split(',')[1]
						}
					})
				};
		}
	}

	public onAdd(): void {
		if (this.form.valid) {
			this.onAddFormacion.emit(this.form.getRawValue());
			this.onToggleFormFormacion.emit();
			this.form.reset()
		} else {
			console.log(this.form.errors)
			this.form.markAllAsTouched();
		}
	}

	public onEdit(): void {
		if (this.form.valid) {
			this.onEditFormacion.emit(this.form.getRawValue());
			this.onToggleFormFormacion.emit();
			this.form.reset()
		} else {
			console.log(this.form.errors)
			this.form.markAllAsTouched();
		}
	}
}
