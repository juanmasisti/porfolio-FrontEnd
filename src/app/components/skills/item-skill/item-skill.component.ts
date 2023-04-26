import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../../Interfaces/Skill';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-item-skill',
	templateUrl: './item-skill.component.html',
	styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent {
	@Input() skill: Skill = { id:0, titulo: "", parrafo: "", porcentaje:0}; 
	@Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
	@Output() onEditFormSkill: EventEmitter<Skill> = new EventEmitter();
	subscription?: Subscription;
	estado: boolean = false;
	
	constructor( 
		private uiService: UiService
	) {}

	ngOnInit() : void {
		this.subscription = this.uiService.onToggleButton().subscribe((estado)=> this.estado = estado);
	}

	public onDelete(skill:Skill) {
		this.onDeleteSkill.emit(skill);
	}

	public onEdit(skill:Skill) { 
		this.onEditFormSkill.emit(skill);
		this.uiService.toggleFormSkill();
		this.uiService.toggleButton();
	}
}