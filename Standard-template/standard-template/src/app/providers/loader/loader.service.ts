import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class LoaderService {
    private readonly _isLoading$ = new BehaviorSubject<boolean>(false);
    readonly isLoading$ = this._isLoading$.asObservable();

    /**
     * Function to set the state whether the loader should be displayed or not.
     * @param {boolean} shouldDisplayLoader Whether the loader should be displayed or not
     */
    setLoader (shouldDisplayLoader: boolean): void {
        this._isLoading$.next(shouldDisplayLoader);
    }
}