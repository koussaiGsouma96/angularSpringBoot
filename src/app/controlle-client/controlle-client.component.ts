import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../services/clientService/client';
import { ClientService } from '../services/clientService/client.service';

@Component({
  selector: 'app-controlle-client',
  templateUrl: './controlle-client.component.html',
  styleUrls: ['./controlle-client.component.css']
})
export class ControlleClientComponent implements OnInit {
  public clients : Client[];

  constructor(private clientService : ClientService , public route:Router ){
    this.clients=[]
  }
  ngOnInit()
   {
   this.getClients();
  }

  public getClients(): void {
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe(
      (response: void) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateEmloyee(clientId: Client): void {
    this.clientService.updateClient(clientId).subscribe(
      (response) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
