import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-fast-contact',
  templateUrl: './fast-contact.component.html',
  styleUrls: ['./fast-contact.component.scss']
})
export class FastContactComponent {
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['ge', 'en', 'ru']);
    translate.setDefaultLang('ge');
    const browerLang = translate.getBrowserLang();
  }
}




