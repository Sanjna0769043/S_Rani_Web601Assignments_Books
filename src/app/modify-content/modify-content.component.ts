import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';
import { InMemoryDataService } from '../services/in-memory-data.service'
@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @ViewChild('id') id: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('prize') prize: ElementRef;
  @ViewChild('imgURL') imgURL: ElementRef;
  @ViewChild('type') type: ElementRef;
  @ViewChild('tags') tags: ElementRef;
  isShowError: boolean = false;
  errorMessage: string = "";
  isIdFoundInDb: boolean = false;

  constructor(private contentService: ContentService, private messageService: MessageService, private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
  }

  checkContent(newContent: Content): void {
    this.isIdFoundInDb = false;
    this.contentService.getContent().subscribe(content => {
      if (content && content.length > 0) {
        if (newContent && newContent.id && newContent.id > 0) {
          let idIndex = content.findIndex((data) => data.id == newContent.id);
          if (idIndex != -1) {
            newContent.id = Number(newContent.id);
            this.isIdFoundInDb = true;
            this.updateContentToDb(newContent);
          } else {
            this.addUniqueContent(newContent, content);
          }
        } else {
          this.addUniqueContent(newContent, content);
        }
      } else {
        this.addUniqueContent(newContent, content);
      }
    });
  }

  addUniqueContent(newContent: Content, contentList: Content[]): void {
    let id = this.inMemoryDataService.genId(contentList);
    newContent.id = id;
    this.addContentToDb(newContent);
  }

  addContentToDb(content: Content): void {
    this.contentService.addContent(content)
      .subscribe(newContentFromServer => {
        this.resetFormValues();
        this.messageService.add(`Content Item added by id:${newContentFromServer.id}`);
        this.newContentEvent.emit(newContentFromServer);
      });
  }

  updateContentToDb(content: Content): void {
    this.contentService.updateContent(content)
      .subscribe(() => {
        this.resetFormValues();
        this.isIdFoundInDb = false;
        this.messageService.add(`Content Item updated at id:${content.id}`);
        this.newContentEvent.emit(content);
      });
  }

  addContent(
    id: string,
    title: string,
    description: string,
    prize: string,
    imgURL: string,
    type: string,
    tags: string
    , event: any): void {
    event.preventDefault();
    if (title) {
      if (description) {
        if (prize) {
          if (type) {
            if (tags) {
              let newContent = {
                id: Number(id),
                title: title,
                description: description,
                prize: prize,
                imgURL: imgURL,
                type: type,
                tags: tags.split(','),
              };
              this.checkContent(newContent);
            } else {
              alert("Please fill all details")
            }
          } else {
            alert("Please fill all details")
          }
        } else {
          alert("Please fill all details")
        }
      } else {
        alert("Please fill all details")
      }
    } else {
      alert("Please fill all details")
    }

  }

  resetFormValues() {
    this.id.nativeElement.value = "";
    this.title.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.prize.nativeElement.value = "";
    this.imgURL.nativeElement.value = "";
    this.type.nativeElement.value = "";
    this.tags.nativeElement.value = "";
  }

}
