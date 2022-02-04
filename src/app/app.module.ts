import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PipelistPipe } from './pipelist.pipe';
import { HighlightDirective } from './highlight.directive';

import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,    
    PipelistPipe,
    HighlightDirective,    
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
