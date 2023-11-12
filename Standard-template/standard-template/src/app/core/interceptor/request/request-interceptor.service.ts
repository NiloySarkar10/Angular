import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UtilityService } from "../../service/utility/utility.service";
import { Observable, tap } from "rxjs";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
    constructor(@Inject(UtilityService) private readonly utilityService: UtilityService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestHeaders = this.utilityService.getRequestHeaders(req);
        // Cloning the request object to add the headers that we have attached
        const request = req.clone({
            headers: requestHeaders
        });
        // After pipe we have access to the response received for the request.
        return next.handle(request).pipe(
            tap({
                // Here we have access to the response, we can write any logic here, but here we are only
                // handling the error case.
                error: (error) => {
                    if (error instanceof HttpErrorResponse) {
                        // We can do whatever we want if the response is a type of error.
                    }
                }
            })
        )
    }
}