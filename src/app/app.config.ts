import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Project
import { routes } from '@app/app.routes';
import { DataModule } from '@app/modules/data.module';
import { RequestService } from '@core/http/request.service';
import { RequestSource } from '@core/http/request.source';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    // Modules
    DataModule,

    // Request Injection
    {
      provide: RequestSource,
      useClass: RequestService,
    },
  ],
};
