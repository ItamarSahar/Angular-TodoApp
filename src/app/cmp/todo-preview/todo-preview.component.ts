import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss'],
})
export class TodoPreviewComponent implements OnInit {
  constructor() {}
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() onRemove = new EventEmitter<string>()

  bgc: string = '#' + Math.floor(Math.random() * 16777215).toString(16);
  todoStyle = `background-color: ${this.bgc}`;

  ngOnInit(): void {}

  toggleDone(): void {
    this.todo.completed = !this.todo.completed;
  }

  onRemoveTodo() {
    this.onRemove.emit(this.todo._id);
  }

  //TODO: add addTodo() to he App and the Service !
}
