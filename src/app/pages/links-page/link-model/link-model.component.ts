
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../../model/Link';
import { LinkService } from '../../../services/link.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-link-model',
  templateUrl: './link-model.component.html',
  styleUrls: ['./link-model.component.css']
})
export class LinkModelComponent implements OnInit {
  @Input()
  link: Link;
  @Output()
  linkOutput = new EventEmitter<any>();
  constructor(private linkService: LinkService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  addLink() {
    console.log('in model component ' + JSON.stringify(this.link));

    this.linkService.updateLink(this.link).subscribe((res: Link) => {
      this.linkOutput.emit({ link: this.link });
    });
  }
}
