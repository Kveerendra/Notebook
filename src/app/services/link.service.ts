import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Link } from '../model/Link';

@Injectable()
export class LinkService {
  private url = 'http://localhost:3000/LinkApi/link';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }
  getLinks() {
    return this.http.get(this.url, { headers: this.headers }).map(function (response) { return response.json(); });
  }
  getLink(id: string) {
    return this.http.get(this.url + '/' +  id, { headers: this.headers}).map(function (response) { return response.json(); });
  }
  addLink(link: Link) {
      return this.http.post(this.url, link, { headers: this.headers }).map(function (response) { return response.json(); });
  }
  updateLink(link: Link) {
    console.log(link);
    return this.http.put(this.url + '/' + link._id, link,
    { headers: this.headers }).map(function (response) { return response.json(); });
  }
  deleteLink(id: string) {
    return this.http.delete(this.url + '/' +  id, { headers: this.headers}).map(function (response) { return response.json(); });
  }



  extractData( response: Response){
    const body = response.json();
    console.log('Body', body);
    return body || [];
  }
}
