import { Component } from '@angular/core';

// Project
import { NavbarComponent } from '@app/utils/components/organisms/navbar/navbar.component';

@Component({
  selector: 'admin-layout',
  standalone: true,
  imports: [
    // Components
    NavbarComponent,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {}
