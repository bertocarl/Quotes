import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'All our dreams can come true, if we have the courage to pursue them.',"Walt Disney","Anonymous",0,0,new Date(2019,1,10)),
        new Quote(2,'It does not matter how slowly you go as long as you do not stop.',"Confucius","Anonymous",0,0,new Date(2019,1,11)),


    ]
}
