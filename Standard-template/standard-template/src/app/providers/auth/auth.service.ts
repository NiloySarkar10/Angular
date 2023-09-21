import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
    constructor() {}

    isAuthenticated (): Observable<boolean> {
        return this.isAuthenticatedSubject.asObservable();
    }

    /**
     * Function to check if user has a valid token (assuming JWT token)
     * @returns {boolean}
     */
    private hasValidToken (): boolean {
        // Logic to be implemented
        return true;
    }
}