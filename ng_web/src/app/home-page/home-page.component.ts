import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <div class="home-page">
      <h2>Welcome to Filigree!</h2>
      <p>This is the home page of your application.</p>
    </div>
  `,
  styles: [`
    .home-page {
      padding: 2rem;
      text-align: center;
    }
  `]
})
export class HomePageComponent {}