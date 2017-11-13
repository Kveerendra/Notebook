import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Link } from '../model/Link';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinkService {
  private url = 'http://localhost:3000/LinkApi/link';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http, private httpc: HttpClient) { }
  getLinks() {
    return new Promise(resolve => {
    //return this.http.get(this.url, { headers: this.headers }).map(function (response) { return response.json(); });
   this.httpc.get<Link[]>(this.url).subscribe((data:Link[]) => {resolve(data); }, err => {console.log(err); });
    });
  }
  getLink(id: string) {
    return this.http.get(this.url + '/' +  id, { headers: this.headers}).map(function (response) { return response.json(); });
  }
  addLink(link: Link) {
    link.description = link.description ? link.description : '-';
    link.displayText = link.displayText ? link.displayText : '-';
    link.tooltipText = link.tooltipText ? link.tooltipText : '-';
      return this.http.post(this.url, link, { headers: this.headers }).map(function (response) { return response.json(); });
  }
  updateLink(link: Link) {

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
