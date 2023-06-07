import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { detailequipes } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  public detailequipe: detailequipes;
  public allEquipes: detailequipes[];
  id: number;
  constructor(private detailequipeservice: DetailequipeService, private route: Router, private currentRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.detailequipe = new detailequipes();
    this.currentRoute.params.subscribe(item => {
      this.id = parseInt(item['id']);
    });
    this.detailequipeservice.getAlldetails().subscribe(
      (X: detailequipes[]) => {
        this.allEquipes = X;
        this.detailequipe.salle = this.allEquipes[this.id].salle;
        this.detailequipe.idDetailEquipe = this.allEquipes[this.id].idDetailEquipe;
        this.detailequipe.thematique = this.allEquipes[this.id].thematique;
      }
    )
  }
  editEquipe(){
    this.detailequipeservice.updateDetailequipe(this.detailequipe).subscribe();
    location.href = "http://localhost:4200/detailequipes";
  }

}
