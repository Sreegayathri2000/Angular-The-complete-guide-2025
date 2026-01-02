import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  userId? :string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  onSelectUser(id: string) {
    this.userId = id;
  }
}
