import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = this.el.nativeElement.querySelector('.video-background');
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Try to play again on user interaction if autoplay is blocked
          const tryPlay = () => {
            video.play();
            window.removeEventListener('click', tryPlay);
            window.removeEventListener('touchstart', tryPlay);
          };
          window.addEventListener('click', tryPlay);
          window.addEventListener('touchstart', tryPlay);
        });
      }
    }
  }
}
