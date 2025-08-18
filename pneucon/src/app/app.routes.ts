import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us.component';
import { HomePageComponent } from './home-page.component';
import { ServiceComponent } from './service/service.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CareerComponent } from './career/career.component';
import { InspectionAndTestingComponent } from './inspection-and-testing/inspection-and-testing.component';
import { ElectricalServicesComponent } from './electrical-services/electrical-services.component';
import { MechanicalServicesComponent } from './mechanical-services/mechanical-services.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'inspection', component: InspectionAndTestingComponent },
  { path: 'electricalServices', component: ElectricalServicesComponent },
  { path: 'mechanicalServices', component: MechanicalServicesComponent },
];
