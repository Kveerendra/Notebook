import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../../model/contact';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-model',
  templateUrl: './contact-model.component.html',
  styleUrls: ['./contact-model.component.css']
})
export class ContactModelComponent implements OnInit {
  @Input()
  contact: Contact;
  @Output()
  linkOutput = new EventEmitter<any>();
  constructor(private contactService: ContactsService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  addContact() {
    console.log('in model component ' + JSON.stringify(this.contact));

    this.contactService.updateContact(this.contact).subscribe((res: Contact) => {
      this.linkOutput.emit({ link: this.contact });
    });
  }
}
