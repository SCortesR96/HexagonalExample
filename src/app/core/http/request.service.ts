import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

// Project
import { HandleErrorService } from './handle-error.service';
import { HeaderValidationService } from './header-validation.service';
import { RequestSource } from './request.source';

@Injectable({
  providedIn: 'root',
})
export class RequestService extends RequestSource {
  _httpClient: HttpClient = inject(HttpClient);
  _error: HandleErrorService = inject(HandleErrorService);
  _header: HeaderValidationService = inject(HeaderValidationService);

  get<T>(url: string, sendToken = false): Observable<T> {
    return this._httpClient
      .get<T>(url, { headers: this._header.getHeaders(sendToken) })
      .pipe(catchError(this._error.handleError<T>));
  }

  post<T>(url: string, body: object = {}, sendToken = false): Observable<T> {
    return this._httpClient
      .post<T>(url, body, { headers: this._header.getHeaders(sendToken) })
      .pipe(catchError(this._error.handleError<T>));
  }

  put<T>(url: string, body: object, sendToken = false): Observable<T> {
    return this._httpClient
      .put<T>(url, body, { headers: this._header.getHeaders(sendToken) })
      .pipe(catchError(this._error.handleError<T>));
  }

  delete<T>(url: string, sendToken = false): Observable<T> {
    return this._httpClient
      .delete<T>(url, { headers: this._header.getHeaders(sendToken) })
      .pipe(catchError(this._error.handleError<T>));
  }
}
