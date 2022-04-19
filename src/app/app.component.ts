import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content';
import { MessageService } from './services/message.service';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MyFavouriteBooks';
  contentId: number;
  newContent: Content;
  content: Content;
  constructor(
    public messageService: MessageService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {}

  getContentDetails(id: string) {
    this.contentId = parseInt(id);
    this.contentService.getContentDetails(parseInt(id)).subscribe(
      (content) => {
        this.content = content;
        this.messageService.add(`Content Item with id:${content.id}`);
      },
      (err: any) => {
        this.messageService.add(`Content Item with Id ${id} Not Found`);
      }
    );
  }

  getSearchNameValue(event: any) {}

  getNewContact(event: any) {
    this.newContent = event;
  }
}
