import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../services/clientService/client';
import { ClientService } from '../services/clientService/client.service';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {
  public add: FormGroup;
  id:any;
  public clients : Client[] | any; 

 
  constructor(public formBuilder: FormBuilder,
    private route: ActivatedRoute,

              private router: Router,
              public http: HttpClient
             , public clientService:ClientService) {
               this.clients=[]
                this.add = formBuilder.group({
               /*   name:["", Validators.required],
                  details: ["",Validators.required],
                  image:[""],
                  price:[, Validators.required],*/
                  id:["", ],

                  nom:["", Validators.required],
                  prenom: ["",Validators.required],
                  photoProfil: ["",Validators.required],
                  phone: ["",Validators.required],
                
                  email:[, Validators.required],
                  password:[, Validators.required],
                
                               })
              }

  ngOnInit(): void {
//this.getClients();
    this.id=this.route.snapshot.params['id']

    this.clientService.getSingleClient(this.id).subscribe((response)=>{ 
      this.add.patchValue(response)
    })
  }
  
  update(){
    this.add.valid && 
    this.clientService.updateClient(this.add.value).subscribe((response)=>{
      console.log(this.add.value)
      this.router.navigateByUrl("/home")
    })
  }
}
