import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from "./components/login/login.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { AboutmeComponent } from "./components/aboutme/aboutme.component";

const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'sobremi', component: AboutmeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }