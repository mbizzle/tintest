import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FeedViewComponent } from './feed-view/feed-view.component';
import { FeedModalComponent } from './feed-view/feed-modal/feed-modal.component';

import { RoutingModule } from './routing.module';
import { SearchFilterPipe } from './filter.pipe';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedViewComponent,
    FeedModalComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [FeedModalComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
