import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe((user) => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
