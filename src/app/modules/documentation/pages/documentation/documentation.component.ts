import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Project
import { AdminLayoutComponent } from '@app/utils/components/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'documentation',
  standalone: true,
  imports: [
    RouterOutlet,

    // Components
    AdminLayoutComponent,
  ],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
})
export class DocumentationComponent {}
