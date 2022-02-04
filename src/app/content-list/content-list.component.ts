import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentcard = "contentcard";
  one = "one";
  contentList = [{
    id: 1,
    title: "Robinson Crusoe",
    description: "By the endof the 19th century, no book in English literary history had enjoyed more editions , spin-offs and translations. Crusoe's world famous novel is complex literary  and it's irresistableafter series of adventourous journey.",
    imgURL:  '../../assets/img/one.jpg',
    Creator: "Daniel Defoe ",
    tags:["English", "French"],
    type:" ",
  },
{
  id: 2,
    title: "Clarissa",
    description: "Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart",
    imgURL:  '../../assets/img/two.jpg',
    Creator: "Samuel Richardson",
    tags:["English", "French"],
    type:" ",
},
{
  id: 3,
    title: "Emma",
    description: "Jane Austen's Emma is her masterpiece , mixing the sparkle of her early books with a deep sensibility.She's young, beutiful and witty. And in her arrogance of her youth, she thrown herself into the game of pitting one heart against the other",
    imgURL:  '../../assets/img/three.jpg',
    Creator:"Jane Austen",
    tags:["English", "French"],
    type:" ",
},
{
  id: 4,
    title: "Pride and Prejudice",
    description: "When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man.He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance!",
    imgURL:  "../../assets/img/four.jpg",
    Creator: "Jane Austen",
    tags:["English", "French"],
    type:" ",
},
{
  id: 5,
    title: "The Blue Umbrella",
    description: "The umbrella was like a flower. a great blue flower that had sprung up on the dry brown hillside. In exchange for her lucky leopard's claw pendant, Binya acquires a beutiful blue umbrella that makes her the envy of everyone in her village, especially Ram Bharosa.",
    imgURL:  "../../assets/img/five.jpg",
    Creator: "Ruskin Bond",
    tags:["English", "French"],
    type:" ",
},
{
  id: 6,
    title: "The Alchemist",
    description: "Every few decades of the book is published that changes the lives of its readers forever. This is such a book- a magical fable about learning to listen to your heart, read the omens strewn along life's path and above, all follow your dreams, a magical story.",
    imgURL:  "../../assets/img/six.jpg",
    Creator: "Paulo Coelho",
    tags:["English", "French"],
    type:" ",
},
{
  id: 7,
    title: "Sherlock Holmes",
    description: "The scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it. Sherlock holmes consulting Detective 221B Baker Street London. That is where begin partnership between Dr. Watson.",
    imgURL:  "../../assets/img/seven.jpg",
    Creator: "Arthur Ignautus Conal Doyle",
    tags:["English", "French"],
    type:" ",
}]

  constructor() { }

  ngOnInit(): void {
  }

  imageClick(index:any){
    console.log("index", index, "Title", this.contentList[index].title);
  }

}
