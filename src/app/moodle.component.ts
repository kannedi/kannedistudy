import { Component, style } from '@angular/core';
import { NgSwitch } from '@angular/common';
@Component({
    selector: 'app-angular',
    template: `<h2>{{title}}</h2>
                <input type = "text" value = "Angular"><br>
                <div [class.classBind] ="applyclassBind">Class Binding</div><br>
                <div [style.color]="applyBlue? 'blue':'orange'">Style Binding</div>
                <button (click)="onClick(clickInput.value)">Click me</button>for event binding
                <input type = "text" #clickInput><br>
                <input type = "text" #keyUpInput (keyUp.enter)="onKeyUp(keyUpInput.value)">for keyup event binding<br>
                <p>Two way Binding</p>
                <input type = "text" [(ngModel)]="fname">
                <input type = "text" [(ngModel)]="lname">
                FullName: {{fname}} {{lname}}
                <br>
                <p *ngIf="showElement">This element is shown because ngIf is true</p>
                <div [ngSwitch]="color">
                    <p *ngSwitchCase="'red'">Red colored ngSwitch statement</p>
                    <p *ngSwitchCase="'green'">Green colored ngSwitch statement</p>
                    <p *ngSwitchDefault>Invalid color</p>
                </div>
                <ul>
                    <li *ngFor = "let color of colors">{{color}}</li>
                </ul>
                `,
    //             <h4>Moodle component styling purpose</h4>
    //             <img [src] = "imgLink"><br><br>
    //             `,
    styles: [`.classBind{
                color: red;
    }`]
})
export class MoodleComponent {
    public title = 'Angular Assignment';
    // public imgLink = 'http://lorempixel.com/400/200';
    public applyclassBind = true;
    public applyBlue = true;
    public fname;
    public lname;
    public showElement = true;
    public color = 'green';
    public colors = ['red', 'blue', 'green'];
    onClick(value) {
        console.log(value);
    }
    onKeyUp(value) {
        console.log(value);
    }
}
