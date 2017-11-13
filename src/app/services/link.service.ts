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
     return new Promise(resolve => {
      this.httpc.post<Link>(this.url, link).subscribe((data: Link) => {resolve(data); }, err => {console.log(err); });
     });
  }
  updateLink(link: Link) {

    return new Promise(resolve => {
      this.httpc.put<Link>(this.url + '/' + link._id, link).subscribe((data: Link) => {resolve(data); }, err => {console.log(err); });
     });

    //return this.http.put(this.url + '/' + link._id, link,
    //{ headers: this.headers }).map(function (response) { return response.json(); });
  }
  deleteLink(id: string) {
    return new Promise(resolve => {
      this.httpc.delete<Link>(this.url + '/' + id).subscribe((data: Link) => {resolve(data); }, err => {console.log(err); });
     });
    //return this.http.delete(this.url + '/' +  id, { headers: this.headers}).map(function (response) { return response.json(); });
  }
}
