import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';
import { Content } from '../helper-files/content';
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
  contentList: Content[] = []
  content: boolean;
  noContent: boolean;
  result: any;
  filteredData: Content[] = [];
  @Input() contentId: number;
  @Input() newContent: Content;

  constructor(private contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getContentList();
  }
  getContentList() {
    this.contentService.getContent().subscribe(content => {
      this.contentList = content;
      this.filteredData = [...this.contentList];
    });
  }

  ngOnChanges() {
    if (this.newContent) {
      this.getContentList();
    }
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
