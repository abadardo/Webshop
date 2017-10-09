import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName= '';

  constructor() {
    console.log(this);
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  
  }

  onCreateSehrver() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  appList: any[] = [
    {
      "ID" : "1", 
      "Name" : "One" 
    }, 
    {
      "ID" : "2", 
      "Name" : "Two" 
    }
  ];

}
