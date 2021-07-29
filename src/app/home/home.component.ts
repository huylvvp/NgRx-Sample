import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../Models/todo';
import { addTodo, getTodos, updateTodo } from '../Store/Actions/todo.actions';
import { getErrorMessage } from '../Store/Selectors/shared.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newTodo: Todo = new Todo()
  errorMessage$ = this.store.select(getErrorMessage);
  isEdit: boolean = false;
  selectedIndex: number | undefined;
  constructor(private store: Store,
    private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.getTodos();
    this.errorMessage$.subscribe(
      (message) => {
        if (message != null) this.snackBar.open(message, 'Dismiss', {
          duration: 2000,
          panelClass: ['bg-snackbar']
        });
      }
    )
  }
  
  addTodo(){
    this.store.dispatch(addTodo({todo:this.newTodo}))  
    this.newTodo = new Todo();
  }
  
  getTodos() {
    this.store.dispatch(getTodos());
  }

  handleEditEvent($event:any) {
    this.newTodo = new Todo($event.title,$event.completed);
    this.newTodo.id = $event.id
    this.selectedIndex = $event.id;
    this.isEdit = true;
  }
  
  editTodo() {
    this.store.dispatch(updateTodo({todo:this.newTodo}))
    this.cancelEdit()
  }
  
  cancelEdit() {
    this.selectedIndex = undefined;
    this.isEdit = false;
    this.newTodo = new Todo();
  }
}
