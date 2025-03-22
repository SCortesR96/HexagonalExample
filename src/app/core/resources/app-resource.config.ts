import { MEDIA_ASSETS } from '@app/core/constants/environments.constant';

export class AppResourceConfig {
  public static Images(image: string): string {
    return `${MEDIA_ASSETS}/images/${image}`;
  }

  public static Icons(icon: string): string {
    return `${MEDIA_ASSETS}/icons/${icon}`;
  }
}
