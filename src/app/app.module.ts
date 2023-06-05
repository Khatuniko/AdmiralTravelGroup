import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { MainPgComponent } from './module/main-pg/main-pg.component';
import { HeaderComponent } from './module/main-pg/header/header.component';
import { FooterComponent } from './module/main-pg/footer/footer.component';
import { AboutUsComponent } from './module/main-pg/about-us/about-us.component';
import { ContactUsComponent } from './module/main-pg/contact-us/contact-us.component';
import { LocalToursComponent } from './module/main-pg/local-tours/local-tours.component';
import { OutboundToursComponent } from './module/main-pg/outbound-tours/outbound-tours.component';
import { TransfersComponent } from './module/main-pg/transfers/transfers.component';
import { FastContactComponent } from './module/main-pg/header/fast-contact/fast-contact.component';
import { LogoComponent } from './module/main-pg/header/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './module/main-pg/blog/blog.component';


const routes:Routes = [
  { path:'', component:ModuleComponent},
  { path: 'about-us' ,component:AboutUsComponent },
  { path: 'local-tours', component:LocalToursComponent},
  { path: 'outbound-tours', component:OutboundToursComponent},
  { path: 'transfers', component:TransfersComponent },
  { path: 'blog', component:BlogComponent},
  { path: 'contact-us', component:ContactUsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    MainPgComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    LocalToursComponent,
    OutboundToursComponent,
    TransfersComponent,
    FastContactComponent,
    LogoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
