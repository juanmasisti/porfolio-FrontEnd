import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { SkillService } from "../../services/skill.service";
import { Skill } from '../../Interfaces/Skill';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills : Skill[] = [];
  subscription?: Subscription;
  editar: boolean = false;
  skill: Skill = {titulo: "", parrafo: "", porcentaje: 0};
  isLogged = false;

  constructor(
  private skillService: SkillService,
  private uiService: UiService,
  private tokenService: TokenService
) {}
  
ngOnInit() {
  this.skillService.get().subscribe((skills) => {	
    this.skills = skills
  })
  // Verifica si esta logueado
  this.isLogged = this.tokenService.getToken() != null;
}

public toggleFormSkill() {
  this.skill = {titulo: "", parrafo: "", porcentaje: 0};
  this.uiService.toggleFormSkill();
}

public addSkill(skill: Skill) {
  this.skillService.save(skill).subscribe((skillSubs: Skill) => {
    this.skills.push(skill)
    this.ngOnInit()
  });
}

public deleteSkill(id:number){
  if(id != undefined){
      this.skillService.delete(id).subscribe(data => { this.skills = this.skills.filter( ele => ele.id !== id ) }, err =>{alert("No se pudo eliminar esta skill")
  })
}}

public editSkill(skill: Skill) {
  this.skillService.edit(skill).subscribe(() => {
    let i: number = this.skills.findIndex(ele => ele.id == skill.id);
    this.skills[i] = skill;
  })
} 

public getSkills() : Skill[] {
  return this.skills
}


public editFormSkill(skill: Skill) {
  this.skill = skill;
}

}
