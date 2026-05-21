import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GalleryModule } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// Pages Components
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { ContactComponent } from './account/contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { QrReaderComponent } from './qr-reader/qrreader.component';

//scaner qr
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ContactComponent,
    AboutUsComponent,
    FaqComponent,
    QrReaderComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    PagesRoutingModule,
    ZXingScannerModule
  ]
})
export class PagesModule { }
