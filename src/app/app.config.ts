import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding,withPreloading } from '@angular/router';
import{provideHttpClient} from '@angular/common/http';//para invocar ws

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding(),withPreloading(PreloadAllModules)),// para que los parametros le llegue como input a las paginas 
    provideHttpClient()
  ]
};
