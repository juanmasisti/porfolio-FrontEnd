import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { ButtomComponent } from './components/proyectos/buttom/buttom.component';
import { ProyectosItemComponent } from './components/proyectos/proyectos-item/proyectos-item.component';
import { AddProyectoComponent } from './components/proyectos/add-proyecto/add-proyecto.component';
import { AddSkillComponent } from './components/skills/add-skill/add-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ItemSkillComponent } from './components/skills/item-skill/item-skill.component';
import { AddFormacionComponent } from './components/formacion/add-formacion/add-formacion.component';
import { ItemFormacionComponent } from './components/formacion/item-formacion/item-formacion.component';
import { AddSobremiComponent } from './components/sobre-mi/add-sobremi/add-sobremi.component';
import { AddHeaderComponent } from './components/header/add-header/add-header.component';

const appRoutes: Routes = [
  {path: '', component: ProyectosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SobreMiComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    ButtomComponent,
    ProyectosItemComponent,
    AddProyectoComponent,
    AddSkillComponent,
    ItemSkillComponent,
    AddFormacionComponent,
    ItemFormacionComponent,
    AddSobremiComponent,
    AddHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    NgCircleProgressModule.forRoot({
			radius: 100,
			outerStrokeWidth: 16,
			innerStrokeWidth: 8,
			outerStrokeColor: "#78C000",
			innerStrokeColor: "#C7E596",
			animationDuration: 300,
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
