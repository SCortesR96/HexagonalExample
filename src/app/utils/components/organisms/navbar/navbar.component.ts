import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';

// Project
import { ADMIN_NAVIGATION } from './data/navigation';

@Component({
  selector: 'organism-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    // PrimeNG
    ImageModule,
    MenubarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  logo = '';
  menuItems: MenuItem[] = ADMIN_NAVIGATION;
}
