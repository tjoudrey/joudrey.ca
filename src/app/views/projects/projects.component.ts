import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: String[] = [];

  constructor() {
    this.projects = [
      "tjoudrey/javaRESTcli",
      "tjoudrey/starwars-explorer",
      "tjoudrey/joudrey.ca"
    ]
  }

  ngOnInit() {
  }

}
