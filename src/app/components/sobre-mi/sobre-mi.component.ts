import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SobreMiService } from '../../services/sobreMi.service';
import { UiService } from '../../services/ui.service';
import { SobreMi } from 'src/app/Interfaces/SobreMi';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  public sobremi: SobreMi = { parrafo: "" , id: 0};
	subscription?: Subscription;
  isLogged: boolean = false;


constructor(
  private sobreMiService: SobreMiService,
  private uiService: UiService,
  private tokenService: TokenService
) {}

ngOnInit() {
  this.sobreMiService.get().subscribe((sobreMi) => {	
    this.sobremi = sobreMi[0];
  })
  // Verifica si esta logueado
  this.isLogged = this.tokenService.getToken() != null;
}

public toggleFormSobreMi() {
  this.uiService.toggleFormSobreMi();
}

public editSobreMi(sobremi: SobreMi) {
  console.log(sobremi)
  this.sobreMiService.edit(sobremi).subscribe(() => {
    this.sobremi = sobremi;
  })
}
}
