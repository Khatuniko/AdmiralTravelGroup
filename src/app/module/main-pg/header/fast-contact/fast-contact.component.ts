import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fast-contact',
  templateUrl: './fast-contact.component.html',
  styleUrls: ['./fast-contact.component.scss']
})
export class FastContactComponent {
  
  constructor(public translate: TranslateService, private route:Router) {
    translate.addLangs(['ge', 'en', 'ru']);
    translate.setDefaultLang('ge');
    const browerLang = translate.getBrowserLang();
  }

  goToFacebook(): void {
    window.location.href = 'https://www.facebook.com/tourismgeorgia111';
}
goToInstagram(): void {
  window.location.href = 'https://www.instagram.com/admiraltravelgroup/?igshid=MjEwN2IyYWYwYw%3D%3D&fbclid=IwAR1Jsgyly6j0ps_uQ8ZPrvDOOMZJhg_B7iwAyOF0PZnC_ukJkMBWklgsLCo'

}
}




