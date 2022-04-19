import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  @Output() updatedContentEvent: EventEmitter<Content> =
    new EventEmitter<Content>();
  constructor() {}

  ngOnInit(): void {}

  updateContent(event: any) {
    this.content = event;
    this.updatedContentEvent.emit(event);
  }
}
