import { IAccount } from "./account.interface";
import { LoggingService } from "./logging.Service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
  accounts: IAccount[] = [
    {name: 'Ali', password: '1234'},
    {name: 'Moahammad', password: '5678'},
    {name: 'Kian', password: '2015'}
  ];

  userAdded = new EventEmitter<IAccount>();


   constructor( private loggingService:LoggingService){}
  addAccount(a: IAccount) {
    this.accounts.push(a);
    this.loggingService.logMessage(a.toString());
  }

}
