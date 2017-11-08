export class Contact {
  _id: number;
  displayName: string;
  voipNum: number;
  skypeNum: number;

  constructor(displayName: string, voipNum: number, skypeNum: number) {
    this.displayName = displayName;
    this.voipNum = voipNum;
    this.skypeNum = skypeNum;
  }
}
