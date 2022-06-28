import { Component, Input, OnInit } from '@angular/core';
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

  bgc: string = '#' + Math.floor(Math.random() * 16777215).toString(16);
  todoStyle = `background-color: ${this.bgc}`;

  ngOnInit(): void {}
}
