import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ButtomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
