import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stades } from 'src/app/core/model/stade';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-stade',
  templateUrl: './form-stade.component.html',
  styleUrls: ['./form-stade.component.css']
})
export class FormStadeComponent implements OnInit {
  public form: FormGroup;
  public stade: stades;
  constructor(private fb: FormBuilder,private equipeservice: EquipeService,private router:Router,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',[Validators.required , Validators.maxLength(10)]],
      photo:['',[Validators.required, Validators.minLength(3)]]
    })
    this.stade = new stades();
  }
  add(){
    this.equipeservice.addStad(this.stade).subscribe(
      ()=>{ this.router.navigate(['/equipes'])}
     )
  }
}
