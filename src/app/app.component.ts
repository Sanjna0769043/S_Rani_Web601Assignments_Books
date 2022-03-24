import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content';
import { MessageService } from './services/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'S_Rani_MyFavouriteBooks';
  contentId: number;
  newContent: Content;
  constructor(public messageService: MessageService) { }

  ngOnInit(): void { }

  getContentItem(id: string) {
    this.contentId = parseInt(id);
  }

  getNewContact(event: any) {
    this.newContent = event;
  }
}
