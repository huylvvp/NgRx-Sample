import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../Services/todo.service";
import { map, mergeMap, catchError, exhaustMap, tap, concatMap } from 'rxjs/operators';
import { EMPTY, of } from "rxjs";
import { addTodoSuccess, getTodosSuccess, TodosAction, updateTodoSuccess } from "../Actions/todo.actions";
import { setErrorMessage } from "../Actions/shared.action";

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(ofType(TodosAction.GetTodos),
    exhaustMap(() => this.todoService.getTodos().pipe(
      map((todos) => getTodosSuccess({ todos })),
      catchError(() =>
        of(setErrorMessage(
          { message: "Error occurs when loading todos" }
        ))
      ))
    )
  ))

  addTodos$ = createEffect(() => {
    return this.actions$.pipe(ofType(TodosAction.AddTodo),
      tap((action) => console.log(action)),
      concatMap((action) => {
        console.log("Action create");
        console.log(action);
        return this.todoService.addTodo(action['todo']).pipe(
          map((todo) => addTodoSuccess({ todo })),
          catchError(() => of(setErrorMessage(
            { message: "Error occurs when add todo" }
          ))
          ))
      }
      )
    )
  })

  updateTodos$ = createEffect(() => {
    return this.actions$.pipe(ofType(TodosAction.UpdateTodo),
      tap((action) => console.log(action)),
      concatMap((action) => {
        return this.todoService.updateTodo(action['todo']).pipe(
          map((todo) => 
          {
            return updateTodoSuccess({ todo })
          }
          
          ),
          catchError(() => of(setErrorMessage(
            { message: "Error occurs when update todo" }
          ))
          ))
      }
      )
    )
  })

  constructor(
    private actions$: Actions,
    private todoService: TodoService) { }
}
