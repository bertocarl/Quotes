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

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
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
