import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {


  sizeNotSelected = "";
  small = "small";
  medium = "medium";
  large = "large";

  contentSearched = true;
  firstcard = "firstcard";
  lastcard = "lastcard";

  // list of books
  contentList = [{
    id: 1,
    title: "Robinson Crusoe",
    description: "By the endof the 19th century, no book in English literary history had enjoyed more editions , spin-offs and translations. Crusoe's world famous novel is complex literary  and it's irresistableafter series of adventourous journey.",
    prize: "$100",
    imgURL: '',
    type: "small",
    tags: ["small", "medium", "large"],
  },
  {
    id: 2,
    title: "Clarissa",
    description: " Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart",
    prize: "$222",
    imgURL: '../../assets/img/two.jpg',
    type: "medium",
    tags: ["small", "medium", "large"],
  },
  {
    id: 3,
    title: "The Alchemist",
    description: "Every few decades of the book is published that changes the lives of its readers forever. This is such a book- a magical fable about learning to listen to your heart, read the omens strewn along life's path and above, all follow your dreams, a magical story.",
    prize: "$400",
    imgURL: "../../assets/img/six.jpg",
    type: "large",
    tags: ["small", "medium", "large"],
  },
  {
    id: 4,
    title: "Emma",
    description: "Jane Austen's Emma is her masterpiece , mixing the sparkle of her early books with a deep sensibility.She's young, beutiful and witty. And in her arrogance of her youth, she thrown herself into the game of pitting one heart against the other",
    prize: "$320",
    imgURL: '../../assets/img/three.jpg',
    type: "small",
    tags: ["small", "medium", "large"],
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    description: "When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man.He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance!",
    prize: "$804",
    imgURL: "../../assets/img/four.jpg",
    type: "medium",
    tags: ["small", "medium", "large"],
  },
  {
    id: 6,
    title: "The Blue Umbrella",
    description: "The umbrella was like a flower. a great blue flower that had sprung up on the dry brown hillside. In exchange for her lucky leopard's claw pendant, Binya acquires a beutiful blue umbrella that makes her the envy of everyone in her village, especially Ram Bharosa.",
    prize: "$523",
    imgURL: "../../assets/img/five.jpg",
    type: "large",
    tags: ["small", "medium", "large"],
  },
  {
    id: 7,
    title: "Sherlock Holmes",
    description: "The scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it. Sherlock holmes consulting Detective 221B Baker Street London. That is where begin partnership between Dr. Watson.",
    prize: "$304",
    imgURL: "../../assets/img/seven.jpg",
    type: "small",
    tags: ["small", "medium", "large"],
  }]
  content: boolean;
  noContent: boolean;
  result: any;
  filteredData: { id: number; title: string; description: string; prize: string; imgURL: string; type: string; tags: string[]; }[];
  @Input() contentId: number;

  constructor(private contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => {
      this.contentList = content;
      this.messageService.add(`Content array loaded!`);
    });

    this.filteredData = [...this.contentList];
  }
  ngOnChanges() {
    this.contentService.getCurrentContentItem(this.contentId).subscribe(content => {
      this.contentId = content.id;
    })
  }
  initializeContentDisplay() {
    this.content = false;
    this.noContent = false;
  }

  searchDress(text: any) {
    this.initializeContentDisplay();


    this.result = this.contentList.filter(function (item: any) {
      return item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    })


    this.result.length ? this.content = true : this.noContent = true;

    this.filteredData = [...this.contentList];

    this.filteredData = this.filteredData.filter(function (item: any) {
      if (item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        item.type = item.type + " highlightSearch"
        return item; ``
      } else {
        item.type = item.type.split(" ")[0];
        return item;
      }
    })
  }



}
