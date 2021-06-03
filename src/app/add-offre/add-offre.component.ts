import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from '../services/OffreService/offre';
import { OffreEmploiService } from '../services/OffreService/offre-emploi.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  myForm!: FormGroup;
  public offres!: Offre[];

  constructor(private formBuilder: FormBuilder , private offreService: OffreEmploiService , route:Router) 
  {
    this.offres=[];
  }

  ngOnInit() {
 
  }
  

  public addOffre(addForm: NgForm): void {
    // var name_element = document.getElementById('txt_name'); 

     this.offreService.addOffre(addForm.value).subscribe(
       (response: Offre) => {
         console.log(response);
         
         addForm.reset();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       }
     );
   }
}
