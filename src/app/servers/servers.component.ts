import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverCreationStatus : string = "Server was not created !";
  serverName : string = "nishchay";
  serverCreated : boolean = false;
  servers = ['TestServer 1', 'TestServer 2'];

  constructor() { 
   setTimeout(() => {
     this.allowNewServer = true;
   }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created !" + " with server name " + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
