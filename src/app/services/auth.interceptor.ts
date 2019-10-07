import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = "Authorization";
    constructor(
        private authService: AuthService,
        private alertifyService: AlertifyService) {

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        var start = performance.now(); 

        const token = this.authService.token;
        if (!token) {
            next.handle(req);
        }

        return next.handle(req.clone({
            headers: req.headers.set(this.AUTH_HEADER, "Bearer " + token)
        }))
        .pipe(res => {
            console.log(req.urlWithParams + ' took ' + (performance.now() - start) + 'ms');
            return res;
        })
        .pipe(catchError(err => {
            if (err instanceof HttpErrorResponse) {
                if (err.status >= 500 || err.status == 0) {
                    this.alertifyService.error("An error occured")
                    console.log("An error occured")
                }
            }

            return throwError(err);
        }));
    }
}