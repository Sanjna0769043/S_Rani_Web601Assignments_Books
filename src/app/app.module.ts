import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentListComponent } from './content-list/content-list.component';
import { SizePipe } from './size.pipe';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import { BorderDirective } from './directive/border.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    SizePipe,
    HoverEffectDirective,
    BorderDirective,
    ContentCardComponent,
    MessagesComponent,
    ModifyContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {
        dataEncapsulation: false,
        delay: 1000,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
