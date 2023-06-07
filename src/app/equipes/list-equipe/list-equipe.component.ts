import { Component, OnInit,Output,EventEmitter,Input, Directive } from '@angular/core';
import { EquipeService } from 'src/app/core/services/equipe.service';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Equipe } from 'src/app/core/model/equipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  @Input() a: Equipe;

  @Output() notification = new EventEmitter();
  searchText: any;
  constructor(    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {

  }
  notifyParent(a : number){
  
      this.notification.emit( a
        )
        this.notification.emit( this.equipe.idEquipe 
          )
  }

}
