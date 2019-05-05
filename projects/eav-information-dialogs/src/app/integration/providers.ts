import { Provider } from '@angular/core';
import { DnnInterceptor, RuntimeSettings } from '@2sic.com/dnn-sxc-angular';
import { environment } from '../../environments/environment';
import { DnnDevSettings } from './dnn-dev-settings';

export function addDnnProviders(providers: Provider[]): Provider[] {
  if (!providers) {
    providers = [];
  }

  providers.push(DnnInterceptor);

  if (!environment.production) {
    providers.push({ provide: RuntimeSettings, useValue: DnnDevSettings });
  }

  return providers;
}
