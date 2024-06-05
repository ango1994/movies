import { HttpInterceptorFn } from '@angular/common/http';
import { apiKey } from '../../../../env';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return next(authReq);
};
