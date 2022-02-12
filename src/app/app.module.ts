import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentListComponent } from './content-list/content-list.component';
import { SizePipe } from './size.pipe';

@NgModule({
  declarations: [
    AppComponent,        
    ContentListComponent,
    SizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
