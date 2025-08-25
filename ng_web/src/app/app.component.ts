import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListenerGridComponent } from './tools/queue-admin/listener-grid.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, ListenerGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu = false;
  activeTab = 'viewer'; // default tab
  sliderImages = [
    'assets/img5.jpg',
    'assets/img2.jpg',
    'assets/img4.png'
  ];
  currentSlide = 0;
  fadingOutIndex: number | null = null;
  transitionMs = 600;

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.sliderImages.forEach(src => {
      const img = new Image();
      img.src = src; // browser caches; reduces flicker when showing
    });
  }

  // When image is clicked, advance to the next image (or choose behavior here)
  onImageClick(index: number) {
    const next = (index + 1) % this.sliderImages.length;
    if (next === this.currentSlide) return; // no change
    this.fadingOutIndex = this.currentSlide;
    this.currentSlide = next;
    setTimeout(() => {
      // clear fading out after animation completes
      if (this.fadingOutIndex === this.fadingOutIndex) {
        this.fadingOutIndex = null;
      }
    }, this.transitionMs);
  }
  title = 'eBusiness';
}