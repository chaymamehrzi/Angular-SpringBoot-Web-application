import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Universite} from "../../../core/model/universite";

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {
@Input() univjson:Universite;
@Output() rediretToList = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
public back(){
    this.rediretToList.emit('U_List');
}
}
