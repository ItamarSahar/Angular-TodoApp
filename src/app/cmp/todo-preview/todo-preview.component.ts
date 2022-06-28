import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss']
})
export class TodoPreviewComponent implements OnInit {

  constructor() { }
@Input() todo!:Todo
@Input() i!:number
  ngOnInit(): void {
  }

}
