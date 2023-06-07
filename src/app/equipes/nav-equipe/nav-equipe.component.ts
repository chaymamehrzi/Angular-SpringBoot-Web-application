import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { Equipe } from 'src/app/core/model/equipe';
import { Router, ActivatedRoute } from '@angular/router';
import { FormEquipeComponent } from '../form-equipe/form-equipe.component';
import {
  query,
  stagger,
  transition,
  trigger,
  animateChild,
  style,
  animate
} from "@angular/animations";
import {  EventEmitter, Output } from "@angular/core";
import { EquipesComponent } from '../equipes.component';

@Component({
  selector: 'app-nav-equipe',
  templateUrl: './nav-equipe.component.html',
  styleUrls: ['./nav-equipe.component.css'],
  animations: [
    trigger("list", [
      transition(":enter", [query("@items", stagger(150, animateChild()))]),
      transition(":leave", [query("@items", stagger(-150, animateChild()))])
    ]),
    trigger("items", [
      // cubic-bezier for a tiny bouncing feel
      transition(":enter", [
        style({ transform: "scale(0.5)", opacity: 0 }),
        animate("1s ease-out", style({ transform: "scale(0.5)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "scale(1)", opacity: 1 }),
        animate("1s ease-in", style({ transform: "scale(0.5)", opacity: 0 }))
      ])
    ])
  ]
})
export class NavEquipeComponent implements OnInit {

  constructor(private equipeService: EquipeService,private router:Router) { }
  searchText: any;
  public listE: Equipe[];
  public all: Equipe[];
  public nomEquipeX: String;
  equipe : Equipe ;
  a : number;


  public enabled: boolean = true;
  public visible: boolean = true;

  ngOnInit(): void {
    this.equipeService.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
        this.listE = this.all.filter((X) => X.nomEquipe)

        console.log("ojn",this.listE)

      }
    )
  }
  refresh(){
    this.equipeService.getAllProduct().subscribe(
      (X:Equipe[])=>{
        this.listE = X;
        console.log("ojn",this.listE)

      }
    )
  }
  add(){
    this.router.navigate(['/equipes/add']);
   // {FormEquipeComponent};

  }
  fav(id: number , p : Equipe){
    console.log("a :"+this.a)
    if(p.fav==0){
       this.equipeService.fav(id).subscribe( ()=>{   
    this.refresh();
  }
  ) 
    }else{
      this.equipeService.unfav(id).subscribe( ()=>{   
        this.refresh();
      }
      ) 
    }
  }
  public show() {
    if (this.enabled) this.visible = !this.visible;
  }
}
