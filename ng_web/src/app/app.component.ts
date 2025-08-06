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
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];
  currentSlide = 0;

  openPopup(index: number) {
    alert('Clicked image #' + (index + 1));
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }
  title = 'filigree';
}