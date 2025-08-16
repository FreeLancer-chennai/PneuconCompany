import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMenuComponent, HomeComponent, FooterComponent, ServiceComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pneucon';
}
