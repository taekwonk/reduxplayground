import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgReduxModule, NgRedux } from 'ng2-redux';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiledService } from './service/inmemory.service';

import { store, IAppState } from './store';
import { FiledListActions } from './filedList/filedList.actions';
import { FiledListComponent } from './filedList/filedList.component';
import { FiledListService } from './filedList/filedList.service';

@NgModule({
  declarations: [
    AppComponent,
    FiledListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(FiledService, { delay: 500 }),
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    FiledListService, 
    FiledListActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
