import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderValidationService {
  public getHeaders(sendAuthorization: boolean): HttpHeaders {
    return sendAuthorization
      ? new HttpHeaders({
          Authorization: `Bearer ${this.getAuthorization()}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        })
      : new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        });
  }

  public getSendFileHeaders(sendAuthorization: boolean): HttpHeaders {
    return sendAuthorization
      ? new HttpHeaders({
          Authorization: `Bearer ${this.getAuthorization()}`,
        })
      : new HttpHeaders({ Accept: 'application/json' });
  }

  private getAuthorization(): string {
    return sessionStorage.getItem('accessToken') ?? '';
  }
}
