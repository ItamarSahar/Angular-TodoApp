import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from '../models/Todo';
import { TodoFilter } from '../models/todo-filter';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private _todoDB: Todo[] = [
    {
      _id: this._makeId(),
      content: 'first todo',
      completed: false,
    },
    {
      _id: this._makeId(),
      content: 'second todo',
      completed: true,
    },
  ];

  private _todos$ = new BehaviorSubject<Todo[]>([]);
  public todos$ = this._todos$.asObservable();

  private _filterBy$ = new BehaviorSubject<TodoFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable();

  public query() {
    const filterBy = this._filterBy$.value;
    const todos = this._todoDB.filter(({ content }) => {
      return content.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._todos$.next(todos);
  }

  public remove(todoId: string) {
    const todos = this._todoDB;
    const todoIdx = todos.findIndex((todo) => todo._id === todoId);
    todos.splice(todoIdx, 1);
    this._todos$.next(todos);
    return of({});
  }

  private _makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
