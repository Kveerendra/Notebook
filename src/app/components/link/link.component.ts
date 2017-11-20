import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../model/Link';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LinksPageComponent } from '../../pages/links-page/links-page.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
@Input() link: Link;
  constructor(private modalService: NgbModal) { }
  @Output()
  edit: EventEmitter<string> = new EventEmitter();
  @Output()
  delete: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
  }
  editLink() {
    this.edit.emit('edit');
  }
  deleteLink(link){
    this.delete.emit(link);
  }
}
