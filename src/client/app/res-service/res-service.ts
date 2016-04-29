import {Injectable} from 'angular2/core';

export class Contact{
  constructor(public email: String, public phone: String,
    public website: String) { }
}

class Profile {
  constructor(public company: String, public url: String) { }
}

export class Project {
  constructor(public title: String, public description: String,
    public screenshot: String) { }
}

export class Employment {
  constructor(public period: String, public company: String,
    public position: String, public description: String) { }
}

export class Education {
  constructor(public period: String, public institution: String,
    public degree: String, public details: String) { }
}

export class Skill {
  constructor(public title: String, 
  public level: String, public details: String[]) { }
}

export class Language {
  constructor(public lang: String, public level: String) { }
}

export class Award {
  constructor(public title: String, public awarded: String,
    public description: String) { }
}

export class Resume {
  public about: String;
  public contact: Contact;
  public projects: Project[];
  public employment: Employment[];
  public education: Education[];
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
    res.contact = new Contact("richard.hendriks@mail.com",
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
       new Education("2011 - 2014", "University of Oklahoma",
       "Bachelor, Information Technology", "" ),
       new Education("2008 - 2011", "Example College", "great degree",
       "studied really hard")
     ];
     res.skills = [
       new Skill("Web Development", "Master", 
       ["HTML", "CSS", "Javascript"]),
       new Skill("Compression", "Master", ["Mpeg", "MP4", "GIF"])
     ];
     res.languages = [
       new Language("English", "native speaker"),
       new Language("French", "barely")
     ];
     res.awards = [
       new Award("Digital Compression Pioneer Award - Techcrunch",
       "01 November 2014", "There is no spoon")
     ];
     return res;
  }

}
