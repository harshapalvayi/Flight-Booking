import {AccountType} from './AccountType';

export class User {
  public userid?: number;
  public firstname?: string;
  public lastname?: string;
  public username?: string;
  public password?: string;
  public email?: string;
  public token?: string;
  public accountType?: AccountType;
}
