import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private scrollHandler?: () => void;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Video autoplay fallback
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

    // Pause animation if not at the very top
    const title = this.el.nativeElement.querySelector('.animated-title');
    if (title) {
      const letters = title.querySelectorAll('.letter');
      const setAnimationState = () => {
        if (window.scrollY === 0) {
          letters.forEach((l: HTMLElement) => l.style.animationPlayState = 'running');
        } else {
          letters.forEach((l: HTMLElement) => l.style.animationPlayState = 'paused');
        }
      };
      setAnimationState();
      this.scrollHandler = setAnimationState;
      window.addEventListener('scroll', setAnimationState);
    }
  }

  ngOnDestroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
