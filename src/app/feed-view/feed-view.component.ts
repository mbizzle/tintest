import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FeedModalComponent } from '../feed-view/feed-modal/feed-modal.component';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.scss']
})
export class FeedViewComponent implements OnInit {

  feed: any;

  constructor(public apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.apiService.getFeed('all').then((feed) => {
      this.feed = feed.data;
    });
  }

  filter(data) {
    if (data === 'tw') {
      this.apiService.getFeed('twitter').then((feed) => {
        this.feed = feed.data;
      });
    }
    if (data === 'fb') {
      this.apiService.getFeed('facebook').then((feed) => {
        this.feed = feed.data;
      });
    }
    if (data === 'go') {
      this.apiService.getFeed('googleplus').then((feed) => {
        this.feed = feed.data;
      });
    }
    if (data === 'ig') {
      this.apiService.getFeed('instagram').then((feed) => {
        this.feed = feed.data;
      });
    }
    if (data === 'all') {
      this.apiService.getFeed('all').then((feed) => {
        this.feed = feed.data;
      });
    }
  }

  open(data) {
    const md = this.modalService.open(FeedModalComponent);
    md.componentInstance.data = {data: data};
  }

}
