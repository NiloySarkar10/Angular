import { Component, Inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  private readonly ngUnsubscribe$ = new Subject<boolean>();

  constructor(@Inject(AppService) private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.isUserAuthenticated()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe({
        next: res => {
          this.isAuthenticated = res
        }
      })
  }
}
