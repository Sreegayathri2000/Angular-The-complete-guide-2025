import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent as NewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isTaskAdded = false;

  constructor(private taskService: TasksService) {}

  get selectedUser() {
    return this.taskService.getUserTasks(this.userId);
  }

  addTask() {
    this.isTaskAdded = true;
  }
  onCancel() {
    this.isTaskAdded = false;
  }
}
