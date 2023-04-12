import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showFormSkill: boolean = false;
	private showFormProject: boolean = false;
	private showFormEducation: boolean = false;
	private showFormAbout: boolean = false;
	private showFormExperience: boolean = false;

	private showFormSkillSubj = new Subject<any>();
	private showFormProjectSubj = new Subject<any>();
	private showFormEducationSubj = new Subject<any>();
	private showFormAboutSubj = new Subject<any>();
	private showFormExperienceSubj = new Subject<any>();

	private showEdit: boolean = false;
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

	public toggleFormEducation(): void {
		this.overlay(this.showFormEducation);
		this.showFormEducation = !this.showFormEducation;
		this.showFormEducationSubj.next(this.showFormEducation);
	}

	public toggleFormAbout(): void {
		this.overlay(this.showFormAbout);
		this.showFormAbout = !this.showFormAbout;
		this.showFormAboutSubj.next(this.showFormAbout);
	}

	public toggleFormExperience(): void {
		this.overlay(this.showFormExperience);
		this.showFormExperience = !this.showFormExperience;
		this.showFormExperienceSubj.next(this.showFormExperience);
	}

	public onToggleFormSkill(): Observable<any> {
		return this.showFormSkillSubj.asObservable();
	} 

	public onToggleFormProject(): Observable<any> {
		return this.showFormProjectSubj.asObservable();
	} 

	public onToggleFormEducation(): Observable<any> {
		return this.showFormEducationSubj.asObservable();
	}

	public onToggleFormAbout(): Observable<any> {
		return this.showFormAboutSubj.asObservable();
	}

	public onToggleFormExperience(): Observable<any> {
		return this.showFormExperienceSubj.asObservable();
	}

	public onToggleEdit(): Observable<any> {
		return this.showEditSubj.asObservable();
	} 
}