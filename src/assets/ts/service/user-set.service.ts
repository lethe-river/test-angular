import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserSetService {
  public user: User;
  test: any;
  setTest = new EventEmitter<any>();

  setUser = (value: User) => {
    this.user = value;
  };

  onSetTest = (value: any) => {
    this.test = value;
  };

  constructor() {
  }
}
