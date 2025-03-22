import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

// Project
import { ERROR_MESSAGES } from '@core/constants/error.constant';
import { SwalService } from '@utils/services/notifications/swal.service';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError<T>(err: any): Observable<T> {
    const errorMessage = ERROR_MESSAGES.anError;

    return throwError(() => {
      if (err?.error?.status === 'validation') {
        const generateErrorsHtml = (errors: string[]): string => {
          return errors.map((error) => `<li> ${error}</li>`).join('');
        };

        const errorsHtml = generateErrorsHtml(Object.values(err?.error?.data));

        SwalService.Toast({
          icon: 'warning',
          title: err.error.message,
          html: `<ul>${errorsHtml}</ul>`,
          timer: 6000,
        });
      }

      if (err?.error?.status === 'error') {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un error',
          html: err.error.message,
        });
      }

      if (err?.error?.status === 500) {
        SwalService.Toast({
          icon: 'warning',
          title: err.error ? err.error.message : errorMessage,
          timer: 6000,
        });
      }

      return errorMessage;
    });
  }
}
