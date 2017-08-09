import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoListStorageService } from './todo-list-storage.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    TodoDataService,
    TodoListStorageService
    ]
})
export class AppComponent {
  
  DataStorageService: TodoListStorageService = new TodoListStorageService();
  
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService){

  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
    this.DataStorageService.put(todo, {complete: !todo.complete});
    this.DataStorageService.update();
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.DataStorageService.post(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
    this.DataStorageService.destroy(todo);
  }

  get todos(): Todo[]{
    return this.DataStorageService.todoList;
  }
}
