import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Header } from 'src/app/Interfaces/Header';
import { HeaderService } from '../../services/header.service';
import { UiService } from '../../services/ui.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public header: Header = {id: 0, titulo:"", parrafo: "",  imagen: {nombre: "", tipo: ""}};
	subscription?: Subscription;
	imageSource: any;
	isLogged: boolean = false;
	
	constructor(
		private headerService: HeaderService,
		private uiService: UiService,
		public sanitizer: DomSanitizer,
		private router: Router,
		private tokenService: TokenService
	) {}

	private textToImg(base64: Uint8Array | undefined) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${base64}`);
	}

	ngOnInit() {
		this.headerService.get().subscribe((headers) => {	
			this.header = headers[0]
			console.log(this.header)
			this.imageSource = this.textToImg(this.header.imagen.base64);
		})
		// Validamos si esta logueado
		this.isLogged = this.tokenService.getToken() != null;
	}

	public toggleFormHeader() {
		this.uiService.toggleFormHeader();
	}

	public editHeader(header: Header) {
		this.headerService.edit(header).subscribe(() => {
			this.header = header;
			this.imageSource = this.textToImg(this.header.imagen.base64)
			this.ngOnInit()
		})
	}
	contacto(){
		this.router.navigate(['/contacto'])
	  }
}
