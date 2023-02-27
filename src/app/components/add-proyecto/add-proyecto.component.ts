import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Proyecto } from '../Proyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent  implements OnInit{
  @Output() onAddProject: EventEmitter<Proyecto> = new EventEmitter();
  titulo: string = "";
  texto: string = "";
  reminder: boolean = false;
  showAddProject: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddProject = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.texto.length === 0){
      alert("Please add a project!")
      return
    }

    const {titulo,texto,reminder} = this
    const newProject = {titulo,texto,reminder}

    this.onAddProject.emit(newProject);
  }

}
