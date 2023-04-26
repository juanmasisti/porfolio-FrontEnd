import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showFormSkill: boolean = false;
	private showFormProject: boolean = false;
	private showFormFormacion: boolean = false;
	private showFormSobreMi: boolean = false;
	private showFormExperience: boolean = false;
	private showFormHeader: boolean = false;

	private showFormSkillSubj = new Subject<any>();
	private showFormProjectSubj = new Subject<any>();
	private showFormFormacionSubj = new Subject<any>();
	private showFormSobreMiSubj = new Subject<any>();
	private showFormExperienceSubj = new Subject<any>();
	private showFormHeaderSubj = new Subject<any>();


	private estado: boolean = false;
	private estadoSubj = new Subject<any>();
	private showEditSubj = new Subject<any>();

  private renderer: Renderer2;
	
	constructor(
		private rendererFactory: RendererFactory2
	) { 
		this.renderer = rendererFactory.createRenderer(null, null)
	}

	private overlay(valor: boolean) {
		if (valor) { 
			this.renderer.removeClass(document.body, "has-overlay");
		} else {
			this.renderer.addClass(document.body, "has-overlay");
		}
	}
	
	public toggleButton(): void {
		this.estado = !this.estado;
		this.estadoSubj.next(this.estado);
	}

	public toggleFormSkill(): void {
		this.overlay(this.showFormSkill);
		this.showFormSkill = !this.showFormSkill;
		this.showFormSkillSubj.next(this.showFormSkill);
	}

	public toggleFormProject(): void {
		this.overlay(this.showFormProject);
		this.showFormProject = !this.showFormProject;
		this.showFormProjectSubj.next(this.showFormProject);
	}

	public toggleFormFormacion(): void {
		this.overlay(this.showFormFormacion);
		this.showFormFormacion = !this.showFormFormacion;
		this.showFormFormacionSubj.next(this.showFormFormacion);
	}

	public toggleFormSobreMi(): void {
		this.overlay(this.showFormSobreMi);
		this.showFormSobreMi = !this.showFormSobreMi;
		this.showFormSobreMiSubj.next(this.showFormSobreMi);
	}

	public toggleFormExperience(): void {
		this.overlay(this.showFormExperience);
		this.showFormExperience = !this.showFormExperience;
		this.showFormExperienceSubj.next(this.showFormExperience);
	}

	public toggleFormHeader(): void {
		this.overlay(this.showFormHeader);
		this.showFormHeader = !this.showFormHeader;
		this.showFormHeaderSubj.next(this.showFormHeader);
	}

	public onToggleFormHeader(): Observable<any> {
		return this.showFormHeaderSubj.asObservable();
	} 

	public onToggleFormSkill(): Observable<any> {
		return this.showFormSkillSubj.asObservable();
	} 

	public onToggleFormProject(): Observable<any> {
		return this.showFormProjectSubj.asObservable();
	} 

	public onToggleFormFormacion(): Observable<any> {
		return this.showFormFormacionSubj.asObservable();
	}

	public onToggleFormSobreMi(): Observable<any> {
		return this.showFormSobreMiSubj.asObservable();
	}

	public onToggleFormExperience(): Observable<any> {
		return this.showFormExperienceSubj.asObservable();
	}

	public onToggleEdit(): Observable<any> {
		return this.showEditSubj.asObservable();
	} 

	public onToggleButton(): Observable<any>{
		return this.estadoSubj.asObservable();
	}
}