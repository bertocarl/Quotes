import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'Watch Finding Nemo',"Unknown","Unknown",0,0,new Date(2019,1,10)),
        new Quote(1,'Watch Finding Nemo',"Unknown","Unknown",0,0,new Date(2019,1,11)),


    ]
}
