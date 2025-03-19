import { Observable } from 'rxjs';

export abstract class RequestSource {
  abstract get<T>(url: string, sendToken: boolean): Observable<T>;

  abstract post<T>(url: string, body: object, sendToken: boolean): Observable<T>;

  abstract put<T>(url: string, body: object, sendToken: boolean): Observable<T>;

  abstract delete<T>(url: string, sendToken: boolean): Observable<T>;
}
