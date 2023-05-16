import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  contacto(){
    this.router.navigate(['/contacto'])
  }

  sobreMi(){
    this.router.navigate(['/sobremi'])
  }

} 
