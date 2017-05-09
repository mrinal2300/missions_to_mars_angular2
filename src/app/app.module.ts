import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { headerComponent }  from './header/app.headerComponent';
import { listComponent }  from './list/app.listComponent';
import { contentComponent } from './content/app.contentComponent';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, headerComponent, listComponent, contentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {  }
