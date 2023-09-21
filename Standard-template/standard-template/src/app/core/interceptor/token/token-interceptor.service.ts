import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UtilityService } from "../../service/utility/utility.service";
import { Observable, tap } from "rxjs";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(@Inject(UtilityService) private readonly utilityService: UtilityService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap({
                next: event => {
                    // Here we have access to the response, we can write any logic here
                    if (event instanceof HttpResponse) {
                        this.utilityService.replaceToken(event);
                    }
                    return event;
                }
            })
        )
    }
}