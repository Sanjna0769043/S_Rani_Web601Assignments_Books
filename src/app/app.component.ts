import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'S_Rani_MyFavouriteBooks';
  contentId: number;
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  getContentItem(id: string) {
    this.contentId = parseInt(id);
  }
}
