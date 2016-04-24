import {Injectable} from 'angular2/core';

class ContactSection {
  constructor(private email: String, private phone: String,
    private website: String) { }
}

class Profile {
  constructor(private company: String, private url: String) { }
}

class Project {
  constructor(private title: String, private description: String,
    private screenshot: String) { }
}

class Employment {
  constructor(private period: String, private company: String,
    private position: String, private description: String) { }
}

class Eductaion {
  constructor(private period: String, private institution: String,
    private degree: String, private details: String) { }
}

class Skill {
  constructor(private title: String, private details: String[]) { }
}

class Language {
  constructor(private lang: String, private detail: String) { }
}

class Award {
  constructor(private title: String, private awarded: String,
    private description: String) { }
}

class Resume {
  public about: String;
  public contact: ContactSection;
  public projects: Project[];
  public employment: Employment[];
  public education: Eductaion[];
  public skills: Skill[];
  public languages: Language[];
  public awards: Award[];
}


@Injectable()
export class ResService {
  private resume: Resume;

  constructor() { }
  
  public getSampleResume(): Resume {
    let res = new Resume();
    res.about = " Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation! ";
    res.contact = new ContactSection("richard.hendriks@mail.com",
     "(912) 555-4321", "http://richardhendriks.com");
     res.projects = [
       new Project("todoapp1", "sophisticated todo app.",
       "blowyourmind.png")
     ];
     res.employment = [
       new Employment("December 2013 - December 2014",
        "Pied Piper", "CEO/President",
        " Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation! ")
     ];
     res.education = [
       new Eductaion("2011 - 2014", "University of Oklahoma",
       "Bachelor, Information Technology", "" )
     ];
  }

}
