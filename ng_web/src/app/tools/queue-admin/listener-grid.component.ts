import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listener-grid',
  standalone: true,
  templateUrl: './listener-grid.component.html',
  styleUrl: './listener-grid.component.css',
  imports: [CommonModule] // Add necessary imports if needed
})
export class ListenerGridComponent {
  listeners = [
    {
      status: 'Active',
      host: 'localhost',
      name: 'Listener 1',
      description: 'Handles incoming requests',
      action: 'Restart',
      autoStartup: true
    },
    // Add more rows as needed
  ];
}
