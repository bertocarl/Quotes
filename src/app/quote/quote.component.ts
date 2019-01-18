import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,'Watch Finding Nemo',"Unknown","Unknown",0,0,new Date(2019,1,10)),
      new Quote(1,'Watch Finding Nemo',"Unknown","Unknown",0,0,new Date(2019,1,11)),
      

    ]

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
              }
            }
    deleteQuote(isComplete,index){
                if (isComplete){
                    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

                    if(toDelete){
                        this.quotes.splice(index,1)
                    }
                }
          }
    addNewQuote(quote){
              let quoteLength = this.quotes.length;
              quote.id=quoteLength+1;
              quote.completeDate = new Date(quote.completeDate)
              this.quotes.push(quote)

          }


  constructor() { }

  ngOnInit() {
  }
}
