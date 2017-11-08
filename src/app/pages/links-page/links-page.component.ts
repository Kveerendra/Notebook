import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

import { LinkService } from '../../services/link.service';
import { Link } from '../../model/Link';
import { LinkModelComponent } from './link-model/link-model.component';


@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css'],
  providers: [LinkService],
  entryComponents : [LinkModelComponent]
})
export class LinksPageComponent implements OnInit {
  links: Array<Link> = new Array<Link>();
  delMul = false;
  closeResult: string;
  link: Link = {
    _id: -1,
    link: '',
    displayText: '',
    description: '',
    tooltipText: ''
  };
  constructor(private linkService: LinkService, private modalService: NgbModal) {
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getLinks() {
    this.linkService.getLinks().subscribe((res: Link[]) => {
      this.links = res;
    });
  }

  ngOnInit() {
    this.getLinks();
  }
  openAddLink() {
    const modalRef = this.modalService.open(LinkModelComponent);
    const link1: Link = new Link('', '', '', '');
    link1._id = this.links.length;
    modalRef.componentInstance.link = link1;
    modalRef.result.then((link: Link) => { this.getLinks(); });
  }
  deleteMultiple() {
    console.log(this.delMul);
  }

  editLink(link: Link) {
    const modalRef = this.modalService.open(LinkModelComponent);
    const link1: Link = link;
    link1._id = this.links.length;
    modalRef.componentInstance.link = link1;
    modalRef.result.then((link: Link) => { this.getLinks(); });
  }

  deleteLink(link: Link) {
    this.linkService.deleteLink(link._id + '').subscribe((res: any) => {
      this.getLinks();
    });
  }
}
