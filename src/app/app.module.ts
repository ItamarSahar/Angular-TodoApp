import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './cmp/todos-list/todos-list.component';
import { TodoPreviewComponent } from './cmp/todo-preview/todo-preview.component';
import { TodoAppComponent } from './cmp/todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoPreviewComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
