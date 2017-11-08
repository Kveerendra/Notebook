export class Link {
  _id: number;
  link: string;
  description: string;
  tooltipText: string;
  displayText: string;

  constructor(link: string, desc: string, tText: string, dText: string) {
    this._id = -1;
    this.link = link;
    this.description = desc;
    this.tooltipText = tText;
    this.displayText = dText;
  }
}
