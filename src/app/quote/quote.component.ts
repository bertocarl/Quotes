import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'All our dreams can come true, if we have the courage to pursue them.', "Walt Disney", "Anonymous", 0, 0, new Date(2019, 1, 10)),
    new Quote(2, 'It does not matter how slowly you go as long as you do not stop.', "Confucius", "Anonymous", 0, 0, new Date(2019, 1, 11)),


  ]



  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }
}
