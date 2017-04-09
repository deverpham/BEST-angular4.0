import { NgModule }      from '@angular/core';
import { IMPORTS }       from './app.imports';
import {DECLARATIONS }   from './app.declarations';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ IMPORTS ],
  declarations: [ DECLARATIONS ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
