import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
    private readonly ngUnsubscribe$ = new Subject<boolean>();

    ngOnInit(): void {
        // Function to be implemented
    }
    
    ngOnDestroy(): void {
        this.ngUnsubscribe$.next(false);
        this.ngUnsubscribe$.complete();
    }
}
