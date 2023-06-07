import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stades } from 'src/app/core/model/stade';
import { EquipeService } from 'src/app/core/services/equipe.service';
import {
  query,
  stagger,
  transition,
  trigger,
  animateChild,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: 'app-list-stade',
  templateUrl: './list-stade.component.html',
  styleUrls: ['./list-stade.component.css'],
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
export class ListStadeComponent implements OnInit {
  public listE : stades[];
  public enabled: boolean = true;
  public visible: boolean = true;

  constructor(private equipeService : EquipeService ,     private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.equipeService.getAllStads().subscribe(
      (X:stades[])=>{
        this.listE = X;
      }
    )
  }

}
