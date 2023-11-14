import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/providers/auth/auth.service";

@Injectable()
export class AppService {
    constructor(@Inject(AuthService) private readonly authService: AuthService, private http: HttpClient) {}

    /**
     * Function to return the observable state of the logged in status of the user.
     * @returns {Observable<boolean>} 
     */
    isUserAuthenticated (): Observable<boolean> {
        return this.authService.isAuthenticated();
    }
    getCustomers(): Observable<any>{
        return this.http.get('https://localhost:7235/WeatherForecast/customers');
    }
}