import { Component, OnInit, DoCheck } from '@angular/core';
import {LoggingService} from './logging.Service';
import {AccountsService} from './account.service';
import { IAccount } from './account.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [LoggingService]
})
export class AppComponent implements OnInit, DoCheck  {
  accounts: IAccount[] = [];
  message = " Hello World ";

  constructor( private loggingService : LoggingService,
               private accountService: AccountsService) {
                this.accountService.userAdded.subscribe(
                  (account:IAccount) => alert(account)
                );

               }



  ngOnInit() {
    // this.loggingService.logMessage(this.message);
    //const logService = new LoggingService();
    //logService.logMessage(this.message);

   //console.log(this.message);

   this. accounts = this.accountService.accounts;
  }

  ngDoCheck() : void{
    console.log("from app component");
    console.log(this.accountService.accounts);
  }
}
