import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo-service.service';
@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
})
export class TodoAppComponent implements OnInit {
  todos!: Todo[];
  todos$!: Observable<Todo[]>;
  subscription!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.query();
    this.todos$ = this.todoService.todos$;
  }

  onRemoveTodo(todoId: string): void {
    this.todoService.remove(todoId);
  }
}
