import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AuthInterceptor} from '../shared/services/auth-interceptors.service';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
const appearence: MatFormFieldDefaultOptions = {
  appearance: "outline"
}

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideClientHydration(),
      provideHttpClient(withInterceptorsFromDi()),
      provideHttpClient(withFetch()), provideAnimationsAsync(),
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      provideAnimations(),
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearence }, provideAnimationsAsync(), provideAnimationsAsync(),
    ],

};
