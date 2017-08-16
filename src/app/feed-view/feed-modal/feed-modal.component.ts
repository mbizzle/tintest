import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed-modal',
  templateUrl: './feed-modal.component.html',
  styleUrls: ['./feed-modal.component.scss']
})
export class FeedModalComponent implements OnInit {
  @Input() data;

  note: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  cancel() {
    this.activeModal.close();
  }

  ngOnInit() {
    // this.data = data;
  }

}
