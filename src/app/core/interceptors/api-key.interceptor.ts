import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiToken = ``;
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return next(authReq);
};
