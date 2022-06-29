import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor() {}
  @Input() todos!: Todo[];
  @Output() onRemove = new EventEmitter<string>();

  ngOnInit(): void {}
}
