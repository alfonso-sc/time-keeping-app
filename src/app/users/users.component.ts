import { Component } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = USERS;
  selectedUser?: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
