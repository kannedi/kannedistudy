import { Component } from '@angular/core';
import { MoodleComponent } from './moodle.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World</h1>
            <h4> Styling purpose in app component</h4>
              <app-angular></app-angular>`,
  styles: [`h4{
                color: blue;
    }`]
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
