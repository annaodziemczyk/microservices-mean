export class ContactType{
  static readonly MOBILE:string="MOBILE";
  static readonly LANDLINE:string="LANDLINE";
}
export class Contact {
  telnumber:string;
  type:string = ContactType.MOBILE;

  constructor(){}
}
