import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { LoaderInterceptorService } from "./interceptor/loader/loader-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UtilityService } from "./service/utility/utility.service";
import { RequestInterceptorService } from "./interceptor/request/request-interceptor.service";
import { TokenInterceptorService } from "./interceptor/token/token-interceptor.service";

/**
 * Exports CoreModule having commonly used Abstract functionalities.
 * @class CoreModule
 * @exports
 */
@NgModule({
    imports: [CommonModule]
})
export class CoreModule {
    static forRoot (): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [    // Provide the interceptors to be attached to the request chain in order
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: RequestInterceptorService,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptorService,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoaderInterceptorService,
                    multi: true
                },
                UtilityService
            ]
        }
    }

    constructor(
        @Optional()
        @SkipSelf()
            parentModule: CoreModule
    ) {
        if (parentModule !== undefined && parentModule !== null) {
            throw new Error('Core module is already loaded in root module!');
        }
    }
}