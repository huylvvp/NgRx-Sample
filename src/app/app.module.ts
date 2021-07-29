import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {HttpClientModule } from '@angular/common/http';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './Store/Reducers/todo.reducers';
import { TodoEffects } from './Store/Effects/todo.effects';
import { DbService } from './Services/db.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { metaReducers, reducers } from './Store/Reducers/reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './Store/RouterSrializers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatSnackBarModule,
    // them {put204: false} de request update khong tra ve null
    HttpClientInMemoryWebApiModule.forRoot(DbService, { put204: false}),
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: false,
        strictActionTypeUniqueness: true,
      },metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
