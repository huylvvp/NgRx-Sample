import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../Services/todo.service";
import { map, mergeMap, catchError, exhaustMap, tap, concatMap } from 'rxjs/operators';
import { EMPTY, of } from "rxjs";
import { addTodoSuccess, deleteTodoSuccess, getTodosSuccess, TodosAction, updateTodoSuccess } from "../Actions/todo.actions";
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
      concatMap((action) =>
        this.todoService.addTodo(action['todo']).pipe(
          map((todo) => addTodoSuccess({ todo })),
          catchError(() => of(setErrorMessage(
            { message: "Error occurs when adding todo" }
          ))
          ))
      )
    )
  })

  updateTodos$ = createEffect(() => {
    return this.actions$.pipe(ofType(TodosAction.UpdateTodo),
      concatMap((action) =>
        this.todoService.updateTodo(action['todo']).pipe(
          map((todo) => updateTodoSuccess({ todo })),
          catchError(() => of(setErrorMessage(
            { message: "Error occurs when updating todo" }
          ))
          ))
      )
    )
  })

  deleteTodo$ = createEffect(() => this.actions$.pipe(ofType(TodosAction.DeleteTodo),
    mergeMap((action) => this.todoService.deleteTodo(action['todoId']).pipe(
      map(() => deleteTodoSuccess({ todoId: action['todoId'] })),
      catchError(() =>
        of(setErrorMessage(
          { message: "Error occurs when deleting todo" }
        ))
      ))
    )
  ))

  constructor(
    private actions$: Actions,
    private todoService: TodoService) { }
}
