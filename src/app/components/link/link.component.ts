import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../model/Link';
import { LinkModelComponent } from '../../pages/links-page/link-model/link-model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
@Input() link: Link;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  editLink() {
    const modalRef = this.modalService.open(LinkModelComponent);
    const link1: Link = this.link;
    modalRef.componentInstance.link = link1;
  }
}
