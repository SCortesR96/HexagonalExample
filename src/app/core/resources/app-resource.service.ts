import { Injectable } from '@angular/core';
import { AppResourceConfig } from './app-resource.config';

@Injectable({
  providedIn: 'root',
})
export class AppResourceService {
  public static Images = {
    admin: {
      backImage01: AppResourceConfig.Images('admin/back-image-01.jpg'),
    },
    storySet: {
      noData: AppResourceConfig.Images('story-set/no-data.gif'),
    },
  };
}
