import { Component, OnInit } from '@angular/core';
import {Role} from "../../models/role";
import {Tech} from "../../models/tech";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  education: String[] = [];
  employment: Role[] = [];
  skills: Tech[] = [];
  other: String[] = [];

  constructor() {
    this.education = [
      "Bachelors of Computer Science, Acadia University",
      "Cisco Certified Network Administrator",
      "Completed Scrum.org Scrum Master training"
    ];
    this.employment = [
      {location:"Acadia University", title:"Teacher's Assistant"},
      {location:"Bell Aliant", title:"Data Analyst"},
      {location:"Lockheed Martin Canada", title:"Software Developer"},
      {location:"Gracenote Sports", title:"Software Developer and Scrum Master"}
    ];
    this.skills = [
      {name:"Java", tag: "devicon-java-plain"},
      {name:"Python", tag: "devicon-python-plain"},
      {name:"TypeScript", tag: "devicon-typescript-plain"},
      {name:"PostgreSQL", tag: "devicon-postgresql-plain"},
      {name:"Ubuntu", tag: "devicon-ubuntu-plain"},
      {name:"Git", tag: "devicon-github-plain"},
      {name:"Angular", tag: "devicon-angularjs-plain"},
      {name:"Karma", tag: ""},
      {name:"Jasmine", tag: "devicon-jasmine-plain"},
      {name:"Express", tag: "devicon-express-original"},
      {name:"Node.js", tag: "devicon-nodejs-plain"},
      {name:"Spring", tag: ""},
      {name:"Hibernate", tag: ""},
      {name:"Gradle", tag: "devicon-gradle-plain"},
      {name:"Maven", tag: ""},
      {name:"Intillij", tag: "devicon-intellij-plain"},
      {name:"Webstorm", tag: "devicon-webstorm-plain"},

    ];
    this.other = [
      "I've played guitar and sang since I was 10",
      "I restore old cars and motorcycles for fun",
      "I had NATO clearance once",
      "Je parle un peu le Français"
    ];
  }

  ngOnInit() {
  }

}
