import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Proyecto } from '../../../Interfaces/Proyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent{
  @Output() onAddProject: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onEditProject: EventEmitter<Proyecto> = new EventEmitter();
	@Output() onToggleFormProject: EventEmitter<Event> = new EventEmitter();
  @Input() proyecto: Proyecto = {titulo: "", parrafo: "", linkPag: "", img: {titulo: "", tipo: "", base64: ""}};
  subscription?: Subscription;
  showFormProject: boolean = false;
  form: FormGroup;

  constructor(
    private uiService: UiService,
    private formBuilder: FormBuilder
  ) { 
    this.subscription = this.uiService.onToggleFormProject().subscribe( value => this.showFormProject = value );
		this.form = this.formBuilder.group({
			id: [],
			titulo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			parrafo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			linkPag: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
			img: this.formBuilder.group({
				titulo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
				tipo: new FormControl('', {updateOn: 'blur'}),
				base64: new FormControl('', {updateOn: 'blur'})
			})
		})
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['proyecto']?.currentValue)  {
			this.form?.patchValue(this.proyecto);
		}
	}

	get Titulo(){
		return this.form.get("titulo");
	}

	get Parrafo(){
		return this.form.get("parrafo");
	}
		
	get LinkPag(){
		return this.form.get("linkPag");
	}

	get Img(){
		return this.form.get("img")?.get("titulo");	
	}

	public onClose(): void {
		this.onToggleFormProject.emit();
		this.form.reset();
	}

	public onFileSelected(event: any) {
		const file:File = event.target.files[0];
		const reader = new FileReader;
		if (file) {
			reader.readAsDataURL(file);
				reader.onload = () => {
					this.form.patchValue({
						img: {
							titulo: file.name,
							tipo: file.type.split('/')[1],
							base64: reader.result?.toString().split(',')[1]
						}
					})
				};
		}
	}

	public onAdd(): void {
		if (this.form.valid) {
			this.onAddProject.emit(this.form.getRawValue());
			this.onToggleFormProject.emit();
			this.form.reset()
			alert("Success!")
		} else {
			console.log(this.form.errors)
			this.form.markAllAsTouched();
		}
	}

	public onEdit(): void {
		if (this.form.valid) {
			this.onEditProject.emit(this.form.getRawValue());
			this.onToggleFormProject.emit();
			this.form.reset()
			alert("Success!")
		} else {
			console.log(this.form.errors)
			this.form.markAllAsTouched();
		}
	}
}
