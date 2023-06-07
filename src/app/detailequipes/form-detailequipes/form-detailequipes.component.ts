import { Component, OnInit } from '@angular/core';
import { detailequipes } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-detailequipes',
  templateUrl: './form-detailequipes.component.html',
  styleUrls: ['./form-detailequipes.component.css']
})
export class FormDetailequipesComponent implements OnInit {
 public detailequipe : detailequipes;
  constructor(private detailequipeservice: DetailequipeService, private route:Router,private currentRoute:ActivatedRoute) { 

  }
  

    ngOnInit(): void {
      this.detailequipe= new detailequipes();
  
    }
 
     addDetailequipes(){
     this.detailequipeservice.addDetailequipe(this.detailequipe).subscribe(
      ()=>{  this.route.navigate(['/detailequipes'])}
    
    
     )
     }
       
   }
  
 
    




