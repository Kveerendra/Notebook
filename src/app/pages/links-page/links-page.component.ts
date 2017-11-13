import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

import { LinkService } from '../../services/link.service';
import { Link } from '../../model/Link';


@Component({
  selector: 'app-links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css'],
  providers: [LinkService]

})
export class LinksPageComponent implements OnInit {
  links: Link[];
  delMul = false;
  editFlag = false;
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
  openAddLink(content) {
    this.editFlag = false;
    this.modalService.open(content);
  }
  openEditLink(link: Link, content) {
    this.link = link;
    this.editFlag = false;
    this.modalService.open(content);
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
    this.linkService.getLinks().then((data: Link[]) => { console.log(JSON.stringify(data));
      this.links = data;
     });
  }

  ngOnInit() {
    this.getLinks();
  }/*
  openAddLink() {
    const modalRef = this.modalService.open(LinkModelComponent);
    const link1: Link = new Link('', '', '', '');
    link1._id = this.links.length;
    modalRef.componentInstance.link = link1;
    modalRef.result.then((link: Link) => { this.getLinks(); });
  }*/
  deleteMultiple() {
    console.log(this.delMul);
  }
  /*
  addLink(linkModal) {
    this.link._id = this.links.length + 1;
    console.log('in model node  ' + JSON.stringify(this.link));
    this.linkService.addLink(this.link).subscribe((res: Link) => {
      this.getLinks();
    });
  }

  editLink(link: Link) {
    const modalRef = this.modalService.open(LinkModelComponent);
    const link1: Link = link;
    link1._id = this.links.length;
    modalRef.componentInstance.link = link1;
    modalRef.result.then((link: Link) => { this.getLinks(); });
  }
*/
  deleteLink(link: Link) {
    console.log(link);
    this.linkService.deleteLink(link._id + '').then((res: any) => {
      this.getLinks();
    });
  }
  saveLink() {
    if (this.editFlag) {
      this.linkService.updateLink(this.link).then((res: Link) => {
        this.getLinks();
      });
    } else {
      this.link._id = this.links.length + 1;
      this.linkService.addLink(this.link).then((res: Link) => {
        this.getLinks();
      });
    }
  }
}
