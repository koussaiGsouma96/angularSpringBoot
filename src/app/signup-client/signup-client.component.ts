import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../services/clientService/client';
import { ClientService } from '../services/clientService/client.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {
clients : Client[] | any;
firstFormGroup: FormGroup | any;

  constructor(private _formBuilder: FormBuilder,  private route: Router, public http: HttpClient, public client : ClientService) 
   {
     
      this.firstFormGroup = _formBuilder.group({
     /*   name:["", Validators.required],
        details: ["",Validators.required],
        image:[""],
        price:[, Validators.required],*/
        nom:["", Validators.required],
        prenom: ["",Validators.required],
        password: ["",Validators.required],
        
        phone: ["",Validators.required],
      
        email:[, Validators.required],
        photoprofil:[, Validators.required],
      
      
                     })
  }


  ngOnInit(): void {
  }
   
  onadd(){
    

    const data = this.firstFormGroup.value 
   
    
    this.client.addClient(data).subscribe(
      response=>{
        console.log('yes', response)
          this.route.navigateByUrl('/')

       
      }
    )
  
  }

}
