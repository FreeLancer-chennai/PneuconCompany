import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { CertificateComponent } from './certificate/certificate.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent, ServiceComponent, CertificateComponent],
  template: `
    <app-home></app-home>
    <app-service></app-service>
    <app-certificate></app-certificate>
  `
})
export class HomePageComponent {}
