import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Input() index:number;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote = 0;
  downVote = 0;
   like(){
     this.upVote = this.upVote + 1;
   }
   dislike(){
     this.downVote = this.downVote + 1;
   }
  constructor() { }

  ngOnInit() {
  }

}
