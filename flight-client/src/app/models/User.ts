export class User {
  public userid?: number;
  public username?: string;
  public password?: string;
  public email?: string;
  public type?: string;
  public jwtToken?: string;
  public accountType?: number;
}

export class UserToken {
  public id?: number;
  public accountType?: number;
  public type?: string;
  public jwtToken?: string;
  public username?: string;
  public email?: string;
  public expire?: Date;

  constructor(
      id: number,
      accountType: number,
      type: string,
      token: string,
      username: string,
      email: string,
      expire: Date) {
    this.id = id;
    this.accountType = accountType;
    this.type = type;
    this.jwtToken = token;
    this.username = username;
    this.email = email;
    this.expire = expire;
  }
}
