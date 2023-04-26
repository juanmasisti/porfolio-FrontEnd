import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SobreMiService } from '../../services/sobreMi.service';
import { UiService } from '../../services/ui.service';
import { SobreMi } from 'src/app/Interfaces/SobreMi';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  public sobremi: SobreMi = { parrafo: "" , id: 0};
	subscription?: Subscription;
	imageSource: any;


constructor(
  private sobreMiService: SobreMiService,
  private uiService: UiService,
) {}

ngOnInit() {
  this.sobreMiService.get().subscribe((sobreMi) => {	
    this.sobremi = sobreMi[0]
  })
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
