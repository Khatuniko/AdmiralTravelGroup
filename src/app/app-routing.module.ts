import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { AboutUsComponent } from './module/main-pg/about-us/about-us.component';
import { LocalToursComponent } from './module/main-pg/local-tours/local-tours.component';
import { OutboundToursComponent } from './module/main-pg/outbound-tours/outbound-tours.component';
import { TransfersComponent } from './module/main-pg/transfers/transfers.component';
import { BlogComponent } from './module/main-pg/blog/blog.component';
import { ContactUsComponent } from './module/main-pg/contact-us/contact-us.component';

const routes: Routes = [
  { path:'', component:ModuleComponent},
  { path: 'about-us' ,component:AboutUsComponent},
  { path: 'local-tours', component:LocalToursComponent},
  { path: 'outbound-tours', component:OutboundToursComponent},
  { path: 'transfers', component:TransfersComponent },
  { path: 'blog', component:BlogComponent},
  { path: 'contact-us', component:ContactUsComponent},


];

// const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
