import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService {

    getRequestHeaders (req: any): HttpHeaders {
        let headers: HttpHeaders = req.headers;
        // Here we can add headers that we want to attach to the outgoing request
        return headers;
    }

    /**
     * Function to replace the token in our UI app in when the response is received.
     * @param res Response recevied from the server
     */
    replaceToken (res: any): void {
        // logic to be implemented
    }
}