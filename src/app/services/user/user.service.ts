import { Injectable } from '@angular/core';
import { USERS } from '../../mock-users';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
