import {Injectable} from 'angular2/core';

class ContactSection {
  constructor(private email: String, private phone: String,
  private website: String) {}
}

class Profile{
  constructor(private company: String, private url: String) {}
}

class Project {
  constructor(private title: String, private description: String,
  private screenshot: String)  {}
}

class Employment {
  constructor(private period: String, private company: String,
  private position: String, private description: String) {}
}

class Resume {
  private about: String;
  private contact: ContactSection;
}


@Injectable()
export class ResService {

  constructor() {}

}
