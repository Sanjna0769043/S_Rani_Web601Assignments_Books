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
    this.contentValue.addContent(1, "Robinson Crusoe", "By the endof the 19th century, no book in English literary history had enjoyed more editions , spin-offs and translations. Crusoe's world famous novel is complex literary  and it's irresistableafter series of adventourous journey.", "$100", '../../assets/img/one.jpg');
    this.contentValue.addContent(2, "Clarissa", "Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart", "$222", '../../assets/img/two.jpg');
    this.contentValue.addContent(3, "Emma", "Jane Austen's Emma is her masterpiece , mixing the sparkle of her early books with a deep sensibility.She's young, beutiful and witty. And in her arrogance of her youth, she thrown herself into the game of pitting one heart against the other", "$320", '../../assets/img/three.jpg');
    this.contentList = this.contentValue.contentOfArray;
    console.log("complete array", this.contentList);
    this.contentListLength = this.contentValue.contentOfArrayLength;
    console.log("length of content list array", this.contentListLength);
    console.log("object at index 2 is ", this.contentValue.contentOfArrayItem(2));
    this.arrayIndex = this.contentValue.contentOfArrayItem(2);
    this.errorArrayIndex = this.contentValue.contentOfArrayItem(3);
    console.log("object at index 3 is ", this.contentValue.contentOfArrayItem(3));
   }

  ngOnInit(): void {
    
  }

}
