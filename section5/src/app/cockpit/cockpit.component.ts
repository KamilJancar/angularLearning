import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() addServer = new EventEmitter<{name:string, content:string}>();
  @Output() addBluePrint = new EventEmitter<{name:string, content:string}>();
  newServerName = ''
  newServerContent = ''
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.addServer.emit({name: this.newServerName, content: this.newServerContent})
    // this.serverElements.push({
    //   name: this.newServerName,
    //   type: 'server',
    //   content: this.newServerContent
    // })
  }

  onAddBlueprint() {
    this.addBluePrint.emit({name: this.newServerName, content: this.newServerContent})
    // this.serverElements.push({
    //   name: this.newServerName,
    //   type: 'blueprint',
    //   content: this.newServerContent
    // })
  }
}
