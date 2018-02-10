import { IAccount } from "./account.interface";

export class AccountsService {
  accounts: IAccount[] = [
    {name: 'Ali', password: '1234'},
    {name: 'Moahammad', password: '5678'},
    {name: 'Kian', password: '2015'}
  ];

  addAccount(a: IAccount) {
    this.accounts.push(a);
  }

}
