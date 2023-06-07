import { Component, OnInit } from '@angular/core';
import {Universite} from "../../core/model/universite";
import {UniversiteService} from "../../core/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})
export class FormUniversiteComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{8,15}$";
  public Univ: Universite;
  /*imageSrc: string;*/
url : any;
  universite : FormGroup;
  error : boolean;
  constructor(private universiteService: UniversiteService,
              private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createUniversiteForm();
    this.loadData();
  }

 public addUniversities(){
    if(this.universite.valid){
      this.Univ=this.universite?.value;
      if(this.Univ.idUniv==null){
        this.universiteService.addUniversite(this.Univ).subscribe(
          data =>{
            this.router.navigate(['universities/']);
          })
      }else{
        this.universiteService.updateUniversite(this.Univ).subscribe(
          data =>{
            this.router.navigate(['universities/']);
          })
    }

}


 }

 /* onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
       this.Univ.imageUniv = reader.result as string;
        console.log(reader.result);
      };
    }
  }*/


  /*readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }*/




  createUniversiteForm(){
    /*this.Univ.imageUniv=this.imageSrc;*/
    this.universite=new FormGroup({
      idUniv: new FormControl(""),
      nomUniv: new FormControl("", [Validators.minLength(5)]),
      /*nomUniv: new FormControl("", Validators.pattern(this.unamePattern)),*/
      imageUniv : new FormControl("",[Validators.required]),




/*
      imageUniv : new FormControl("",Validators.required)
*/


    })
  }


  private loadData(){
    this.universiteService.univUp$.subscribe(
      data =>{
        if(data){
          this.universite.patchValue({
            idUniv:data.idUniv,
            nomUniv:data.nomUniv,
            imageUniv:data.imageUniv
          })
        }
      }
    )
  }


}
