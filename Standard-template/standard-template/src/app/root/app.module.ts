import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app/app.component';
import { LayoutComponent } from './container/layout/layout.component';
import { AppService } from './service/app.service';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { HomeComponent } from './container/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
     MatPaginatorModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
