import { Injectable } from '@angular/core';

// Project
import { RouteConfig } from './route.config';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  public static products = {
    index: RouteConfig.mockProducts(),
    show: (id: number): string => RouteConfig.mockProducts(`show/${id}`),
    store: RouteConfig.mockProducts(),
    update: (id: number): string => RouteConfig.mockProducts(`${id}`),
    delete: (id: number): string => RouteConfig.mockProducts(`${id}`),
  }
}
