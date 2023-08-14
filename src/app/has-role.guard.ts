import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { from, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { Role } from './role';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const expectedRoles: Role[] = route.data['roles'];

  return inject(AuthService)
    .getUserRole()
    .pipe(
      switchMap((userRole: Role) => {
        const hasRole = expectedRoles.some(role => userRole === role);
        if (hasRole) return of(true);
        else {
          return from(router.navigate(['unauthorized']));
        }
      })
    );
};
