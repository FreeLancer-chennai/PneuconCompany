import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  hovered: number | null = null;

  services = [
       {
      title: 'Pneumatic Valves',
      desc: 'A pneumatic valve is a device that is used to control or modulate the flow of air (or another inert gas) in a pneumatic system. They regulate air or gas passage into tubing, pipes, or devices in an automated system.',
      img: 'assets/images/Service3.jpeg',
      route: 'pneumatic-valves'
    },
    {
      title: 'Online Consultation',
      desc: 'Are you facing any issues? Don\'t waste your time. Call us and we can guide you online, step by step, to resolve your issue.',
      img: 'assets/images/Service1.jpeg',
      route: 'online-consultation'
    },
    {
      title: 'On-Site Troubleshoot',
      desc: 'If you are not able to resolve your issue with our online consultation, then our engineers will inspect and troubleshoot the issue at hand, on-site.',
      img: 'assets/images/Service2.jpeg',
      route: 'on-site-troubleshoot'
    },
    {
      title: 'Preventive Maintenance',
      desc: 'Conducting regular routine checks to prevent issues before occurring.',
      img: 'assets/images/Service4.jpeg',
      route: 'preventive-maintenance'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
