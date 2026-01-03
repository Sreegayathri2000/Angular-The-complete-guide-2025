import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { Userr as User } from './user.model';
import { Card } from "../shared/card/card";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card],
})
export class UserComponent {

  @Input({ required: true }) user!: User;
@Input({required:true}) isUserSelected!:boolean;
  @Output() userId = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.userId.emit(this.user.id);
  }
}
