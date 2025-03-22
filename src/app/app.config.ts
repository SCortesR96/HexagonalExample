import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

// Project
import { routes } from '@app/app.routes';
import { DataModule } from '@app/modules/data.module';
import { RequestService } from '@core/http/request.service';
import { RequestSource } from '@core/http/request.source';
import { CurrencyPipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),

    // PrimeNG Services
    ConfirmationService,

    // Modules
    DataModule,

    // Pipes
    CurrencyPipe,

    // Request Injection
    {
      provide: RequestSource,
      useClass: RequestService,
    },
  ],
};
