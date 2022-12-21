import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userstr = localStorage.getItem("user")
    let user = {token:""}
    if(userstr)
    user = JSON.parse(userstr)
    console.log(user.token)
    request = request.clone({
      headers: new HttpHeaders().append(
        'Authorization',
        'Bearer ' + user.token 
      ),
    });
    return next.handle(request);
  }
}
