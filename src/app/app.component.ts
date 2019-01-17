import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'Watch Finding Nemo',"","","",0,0,new Date(2019,1,10)),
        new Quote(2,'Buy Cookies',"","","",0,0,new Date(2019,1,11)),
        new Quote(3, 'Get new Phone Case',"","","",0,0,new Date(2019,1,12)),

    ]
}
