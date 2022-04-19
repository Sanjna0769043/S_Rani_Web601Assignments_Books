import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Content } from '../helper-files/content';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  sizeNotSelected = '';
  small = 'small';
  medium = 'medium';
  large = 'large';

  contentSearched = true;
  firstcard = 'firstcard';
  lastcard = 'lastcard';

  // list of books
  contentList: Content[] = [];
  content: boolean;
  noContent: boolean;
  result: any;
  filteredContentData: Content[] = [];
  @Input() contentId: number;
  @Input() newContent: Content;

  constructor(
    private contentService: ContentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getContentList();
  }
  getContentList() {
    this.contentService.getContent().subscribe((content) => {
      this.contentList = content;
      this.filteredContentData = [...this.contentList];
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

  searchContentInList(text: any) {
    if (text) {
      this.initializeContentDisplay();
      let searchtext = text;
      text = text.replace(/^\s+|\s+$/g, '');
      text = text.replace(/ +(?= )/g, '');
      text = new RegExp(text, 'gi');

      this.result = this.contentList.filter((item) => {
        let data = item.title.match(text);
        return data !== null;
      });

      // this.result = this.contentList.filter(function (item: any) {
      //   return item.title
      //     .toLocaleLowerCase()
      //     .includes(text.toLocaleLowerCase());
      // });

      this.result.length ? (this.content = true) : (this.noContent = true);
      if (this.content && this.result.length) {
        this.messageService.add(
          `Content Items found with search text: ${searchtext}`
        );
      } else {
        this.messageService.add(`Content Item not found`);
      }

      this.filteredContentData = [...this.contentList];

      this.filteredContentData = this.filteredContentData.filter(function (
        item: any
      ) {
        let data = item.title.match(text);
        if (data) {
          item.type = item.type + ' highlightSearch';
          return item;
        } else {
          item.type = item.type.split(' ')[0];
          return item;
        }
      });
    }
  }
}
