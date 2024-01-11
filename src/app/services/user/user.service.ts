import { Injectable } from '@angular/core';
import { USERS } from '../../mock-users';
import { User } from '../../interfaces/user';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): User[] {
    this.messageService.add('UserService: fetched users');
    return USERS;
  }
}
