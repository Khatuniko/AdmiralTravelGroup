import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['ge', 'en', 'ru']);
    translate.setDefaultLang('ge');
    const browerLang = translate.getBrowserLang();
  }

}
