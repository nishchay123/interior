import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online{
        color : white;
    }`]
})

export class ServerComponent{
    serverId : number = 10;
    serverStatus : string = 'offline';
    serverColor : string = '';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverColor = (this.serverStatus) == 'online' ? 'green' : 'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
}
