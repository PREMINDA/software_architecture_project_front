import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userAuthService: AuthService,
              private router:Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getToken();

    if(token){
      req = this.addToken(req, token);
    }


    return next.handle(req).pipe(
      catchError(
        (err:HttpErrorResponse) => {
          console.log(err.status);
          if(err.status === 401) {
            this.router.navigate(['/login']);
          } else if(err.status === 403) {
            this.router.navigate(['/forbidden']);
          }
          return throwError("Some thing is wrong");
        }
      )
    );
  }


  private addToken(request:HttpRequest<any>, token:string) {
    return request.clone(
      {
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      }
    );
  }
}
