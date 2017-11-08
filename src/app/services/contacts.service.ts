import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  getContacts() {
    return this.http.get("ContactApi/Contact", { headers: this.headers }).map(function (response) { return response.json(); });
  }
  getContact(id: string) {
    return this.http.get("ContactApi/Contact", { headers: this.headers, params: { id: id } }).map(function (response) { return response.json(); });
  }
  addContact(contact: Contact) {
    return this.http.post("ContactApi/Contact", JSON.stringify(contact), { headers: this.headers }).map(function (response) { return response.json(); });
  }
  updateContact(contact: Contact) {
    return this.http.put("ContactApi/Contact", JSON.stringify(contact), { headers: this.headers }).map(function (response) { return response.json(); });
  }
  deleteContact(id: string) {
    return this.http.delete("ContactApi/Contact", { headers: this.headers, params: { id: id } }).map(function (response) { return response.json(); });
  }
}
