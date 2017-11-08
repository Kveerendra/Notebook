export class Contact {
    displayName : string;
    voipNum: number;
    skypeNum: number;

    constructor(skypeNum: number, voipNum: number, displayName: string) {
    this.skypeNum = skypeNum;
    this.voipNum = voipNum;
    this.displayName = displayName;
  }
}