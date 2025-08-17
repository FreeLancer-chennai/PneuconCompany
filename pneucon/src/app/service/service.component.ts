
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit, OnDestroy {
  autoSlideInterval: any;
  hovered: number | null = null;

  // Drag-to-scroll for service cards
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

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
      img: 'assets/images/Service4.jpg',
      route: 'preventive-maintenance'
    }
  ];

  certImages = [
    {
      img: 'assets/images/BIZSAFE STAR CERTIFICATE - 25062027.jpg',
      pdf: 'assets/certificate/BIZSAFE STAR CERTIFICATE - 25062027.pdf',
      alt: 'Bizzsafe Certificate'
    },
    {
      img: 'assets/images/ISO 45001 CERT - PNEUCON ENGINEERING PTE. LTD..jpg',
      pdf: 'assets/certificate/ISO 45001 CERT - PNEUCON ENGINEERING PTE. LTD..pdf',
      alt: 'ISO Certificate'
    },
    {
      img: 'assets/images/SINGAPORE BUSINESS FEDERATION.jpg',
      pdf: 'assets/certificate/SINGAPORE BUSINESS FEDERATION.pdf',
      alt: 'Singapore Certificate'
    }
  ];

  constructor(private router: Router) {}

  onDragStart(event: MouseEvent | TouchEvent, wrapper: HTMLElement) {
    this.isDragging = true;
    wrapper.classList.add('dragging');
    this.startX = (event instanceof MouseEvent)
      ? event.pageX - wrapper.offsetLeft
      : (event as TouchEvent).touches[0].pageX - wrapper.offsetLeft;
    this.scrollLeft = wrapper.scrollLeft;
  }

  onDragMove(event: MouseEvent | TouchEvent, wrapper: HTMLElement) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = (event instanceof MouseEvent)
      ? event.pageX - wrapper.offsetLeft
      : (event as TouchEvent).touches[0].pageX - wrapper.offsetLeft;
    const walk = (x - this.startX) * 1.2; // scroll speed
    wrapper.scrollLeft = this.scrollLeft - walk;
  }

  onDragEnd() {
    this.isDragging = false;
    const wrappers = document.querySelectorAll('.services-cards-wrapper');
    wrappers.forEach(w => w.classList.remove('dragging'));
  }

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.slideCertificates(1);
    }, 4000); // 4 seconds per slide
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openCertificate(pdfPath: string) {
  const pdfWindow = window.open(pdfPath, '_blank');
    if (!pdfWindow) {
      alert('Please enable popups to view the PDF.');
  }
}

  slideCertificates(direction: number) {
    if (direction === 1) {
      // Slide right: move first to last
      const first = this.certImages.shift();
      if (first) this.certImages.push(first);
    } else if (direction === -1) {
      // Slide left: move last to first
      const last = this.certImages.pop();
      if (last) this.certImages.unshift(last);
    }
  }
}

