import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component'; 
import { CertificateComponent } from './certificate/certificate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMenuComponent, HomeComponent, FooterComponent, ServiceComponent, AboutUsComponent,CertificateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pneucon';
  whatsappModalOpen = false;

  openWhatsappModal() {
    this.whatsappModalOpen = true;
  }

  closeWhatsappModal(event?: MouseEvent) {
    if (!event || event.target === event.currentTarget) {
      this.whatsappModalOpen = false;
    }
  }

  startWhatsappChat() {
    window.open('https://wa.me/1234567890', '_blank');
    setTimeout(() => {
      window.location.href = 'https://www.whatsapp.com/download/';
    }, 1000);
    this.whatsappModalOpen = false;
  }
}
