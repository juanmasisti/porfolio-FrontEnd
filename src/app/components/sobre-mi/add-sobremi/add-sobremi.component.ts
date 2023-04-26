import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../../services/ui.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SobreMi } from 'src/app/Interfaces/SobreMi';

@Component({
  selector: 'app-add-sobremi',
  templateUrl: './add-sobremi.component.html',
  styleUrls: ['./add-sobremi.component.css']
})
export class AddSobremiComponent {
    @Output() onSubmitSobreMi: EventEmitter<SobreMi> = new EventEmitter();
    @Output() onToggleFormSobreMi: EventEmitter<Event> = new EventEmitter();
    @Input() sobremi : SobreMi = {id: 0, parrafo :""};
    showSobreMi: boolean = false;
    subscription?: Subscription;
    form: FormGroup;
  
    constructor(
      private uiService: UiService,
      private formBuilder: FormBuilder
    ) {
      this.subscription = this.uiService.onToggleFormSobreMi().subscribe( value => this.showSobreMi = value );
      this.form = this.formBuilder.group({
        id: [],
        parrafo: new FormControl('', {validators: Validators.required, updateOn: "blur"})
        })
      }
  

      get Parrafo(){
        return this.form.get("parrafo");
      }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['sobremi']?.currentValue) {
        this.form?.patchValue(this.sobremi);
      }
    }
  
    public onClose(): void {
      this.onToggleFormSobreMi.emit();
    }
  
    public submit(): void {
      if (this.form.valid){
        this.onSubmitSobreMi.emit(this.form.getRawValue());
        this.onToggleFormSobreMi.emit();
        alert("Operación realizada con éxito!")
      } else {
        console.log(this.form.errors)
        this.form.markAllAsTouched();
      }
    }
  }
