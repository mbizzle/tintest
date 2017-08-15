import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedViewComponent } from './feed-view/feed-view.component';


import { RoutingModule } from './routing.module';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
