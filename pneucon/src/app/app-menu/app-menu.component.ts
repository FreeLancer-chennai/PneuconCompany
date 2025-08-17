import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent {
 constructor(private router:Router){}
  // navigateToBlankPage(){
  //     this.router.navigate(['/about-us']);
  //  }
}
