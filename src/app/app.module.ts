import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsService } from './account.service';
import { LoggingService } from './logging.Service';


@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
