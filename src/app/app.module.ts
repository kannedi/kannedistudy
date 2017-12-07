import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MoodleComponent } from './moodle.component';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MoodleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
