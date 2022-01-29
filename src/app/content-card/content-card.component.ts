import { Component, OnInit } from '@angular/core';
import {Contentlist} from '../helper-files/content-list'

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  
  contentList:any = [];
  contentValue: Contentlist;
  contentListLength: number;
  errorArrayIndex: any;
  arrayIndex: any;

  constructor() {
    this.contentValue = new Contentlist();
    this.contentValue.addContent(1, "Robinson Crusoe", "By the end of the 19th century, no book in English literary history had enjoyed more editions, spin-offs and translations. Crusoe’s world-famous novel is a complex literary confection, and it’s irresistible.", "Daniel Defoe");
    this.contentValue.addContent(2, "Clarissa", "Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy man she detests, in the book that Samuel Johnson described as “the first book in the world for the knowledge it displays of the human heart.”", "Samuel Richardson");
    this.contentValue.addContent(3, "Emma", "Jane Austen’s Emma is her masterpiece, mixing the sparkle of her early books with a deep sensibility.", "Jane Austen");
    this.contentList = this.contentValue.contentOfArray;
    console.log("complete array", this.contentList);
    this.contentListLength = this.contentValue.contentOfArrayLength;
    console.log("length of content list array", this.contentListLength);
    console.log("object at index 2 is ", this.contentValue.contentOfArrayItem(2));
    this.arrayIndex = this.contentValue.contentOfArrayItem(2);
    this.errorArrayIndex = this.contentValue.contentOfArrayItem(3);
   }

  ngOnInit(): void {
    
  }

}
