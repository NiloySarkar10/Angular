import { Inject, Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoaderService } from "src/app/providers/loader/loader.service";
import { Observable, finalize } from "rxjs";

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {
    private countOfActiveRequests: number;

    constructor(@Inject(LoaderService) private readonly loaderService: LoaderService) {
        this.countOfActiveRequests = 0;
    }

    /**
     * Increase the request count when an outgoing request is intercepted.
     */
    private increaseRequestCount (): void {
        if (this.countOfActiveRequests++ == 0) {
            this.loaderService.setLoader(false);
        }
    }

    /**
     * Decrease the request count when an incoming request is intercepted.
     */
    private decreaseRequestCount (): void {
        if (--this.countOfActiveRequests == 0) {
            this.loaderService.setLoader(true);
        }
    }

    intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.increaseRequestCount();
        return next.handle(request).pipe(
            finalize(() => {
                this.decreaseRequestCount();
            })
        )
    }

}