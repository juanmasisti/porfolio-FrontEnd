import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Head, Subscription } from 'rxjs';
import { Header } from 'src/app/Interfaces/Header';
import { UiService } from '../../../services/ui.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as byteBase64 from "byte-base64";

@Component({
  selector: 'app-add-header',
  templateUrl: './add-header.component.html',
  styleUrls: ['./add-header.component.css']
})
export class AddHeaderComponent {
    @Output() onSubmitHeader: EventEmitter<Header> = new EventEmitter();
	@Output() onToggleFormHeader: EventEmitter<Event> = new EventEmitter();
	@Input() header: Header = {id: 0, titulo: "", parrafo: "", imagen: {nombre: "", tipo: ""}};
	showHeader: boolean = false;
	subscription?: Subscription;
	form: FormGroup;

  constructor(
		private uiService: UiService,
		private formBuilder: FormBuilder
	) {this.subscription = this.uiService.onToggleFormHeader().subscribe( value => this.showHeader = value );
		this.form = this.formBuilder.group({
			id: [0],
			titulo: new FormControl('', {validators: Validators.required, updateOn: "blur"}),
			parrafo: new FormControl('', {validators: Validators.required, updateOn: "blur"}),
			imagen: this.formBuilder.group({
				nombre: new FormControl('', {validators: Validators.required, updateOn: "blur"}),
				tipo: new FormControl('', {updateOn: "blur"}),
				base64:new FormControl('', {updateOn: "blur"})
			})
		})
	}

  get Parrafo(){
		return this.form.get("parrafo");
	}
		
	get Imagen(){
		return this.form.get("imagen")?.get("nombre");	
	}

  get Titulo(){
    return this.form.get("titulo");
  }

  ngOnChanges(changes: SimpleChanges) {
	if (changes['header']?.currentValue) {
	  this.form?.patchValue(this.header);
	}
	}

  public onClose(): void {
		this.onToggleFormHeader.emit();
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
						base64: Array.from(byteBase64.base64ToBytes(reader.result?.toString().split(',')[1]!))
					}
				})
			};
		}
	}

	public submit(): void {
		if (this.form.valid){
			console.log(this.form.getRawValue())
			this.onSubmitHeader.emit(this.form.getRawValue());
			this.onToggleFormHeader.emit();
			alert("Operación realizada con éxito!")
		} else {
			console.log(this.form.errors)
			this.form.markAllAsTouched();
		}
	}

}
