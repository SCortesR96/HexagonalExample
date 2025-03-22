import { MenuItem } from 'primeng/api';

export const ADMIN_NAVIGATION: MenuItem[] = [
  {
    label: 'To-Do',
    icon: 'pi pi-list-check',
    routerLink: '/',
  },
  {
    label: 'Productos',
    icon: 'pi pi-box',
    routerLink: '/products',
  },
  {
    label: 'Productos',
    icon: 'pi pi-box',
    items: [
      {
        label: 'Regional',
        icon: 'pi pi-map',
        routerLink: '/admin/company/regionals',
      },
    ],
  },
];
