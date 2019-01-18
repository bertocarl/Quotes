import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes: Quote;
  @Input() index: number;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  upVote = 0;
  downVote = 0;
  thumbsUp() {
    this.upVote = this.upVote + 1;
  }
  thumbsDown() {
    this.downVote = this.downVote - 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
