import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { Todo } from '../Models/todo';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'api/todos/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]> (this.url).pipe(
      tap(obj => {
        console.log(obj);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.url,todo).pipe(  
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  deleteTodo(todoId: number) {
    return this.http.delete(`${this.url}/${todoId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
