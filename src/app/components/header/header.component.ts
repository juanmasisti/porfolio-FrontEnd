import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Header } from 'src/app/Interfaces/Header';
import { HeaderService } from '../../services/header.service';
import { UiService } from '../../services/ui.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public header: Header = {id: 0, nombre:"", parrafo: "", img: {titulo: "", tipo: "", base64: ""}};
	subscription?: Subscription;
	imageSource: any;
	
	constructor(
		private headerService: HeaderService,
		private uiService: UiService,
		public sanitizer: DomSanitizer
	) {}

	ngOnInit() {
		this.headerService.get().subscribe((headers) => {	
			this.header = headers[0]
			console.log(this.header)
			this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.header.img.base64}`);
		})
	}

	public toggleFormHeader() {
		this.uiService.toggleFormHeader();
	}

	public editHeader(header: Header) {
		this.headerService.edit(header).subscribe(() => {
			this.header = header;
			this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.header.img.base64}`);
		})
	}
}
