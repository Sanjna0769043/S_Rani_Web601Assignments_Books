import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Content } from '../helper-files/content';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  public content: Content;
  @Input() contentId: number;
  constructor(private contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getContentItem() {
    this.contentService.getCurrentContentItem(this.contentId).subscribe(content => {
      this.content = content;
      this.messageService.add(`Content Item at id:${content.id}`);
    },
      (err: any) => {
        this.content = {} as any;
        this.messageService.add(`Content Item Id Not Found`);

      });
  }
  ngOnChanges() {
    if (this.contentId) {
      this.getContentItem();
    }
  }

}
