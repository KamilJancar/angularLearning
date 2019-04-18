import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = 'test server';
  userName  = '';
  serverCreated = false;
  servers = [];
  displayDetails = false;
  buttonClicks = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreated = true
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created. It's name is ${this.serverName}`
  }

  onDisplayDetails() {
    this.buttonClicks.push(new Date());
    this.displayDetails = !this.displayDetails;
  }

  setServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
