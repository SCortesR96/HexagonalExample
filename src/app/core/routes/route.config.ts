import { MOCK_URL_BASE, MOCK_URL_PREFIX } from '@core/constants/environments.constant';

export class RouteConfig {
  public static mockProducts(uri = ''): string {
    return `${MOCK_URL_BASE}/${MOCK_URL_PREFIX}/products${uri}`;
  }
}
