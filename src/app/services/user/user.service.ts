import { Injectable } from '@angular/core';
import { USERS } from '../../mock-users';
import { User } from '../../interfaces/user';
import { MessageService } from '../message/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    const users = of(USERS);
    return users;
  }
}
