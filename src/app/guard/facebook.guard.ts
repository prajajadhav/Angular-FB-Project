import { CanActivateFn } from '@angular/router';

export const facebookGuard: CanActivateFn = (route, state) => {
  return true;
};
