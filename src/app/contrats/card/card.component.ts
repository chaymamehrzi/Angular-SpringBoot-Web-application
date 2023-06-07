import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../Model/student';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Student;
  @Output() Stu = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  getcardid(Tesy: number) {
    this.Stu.emit(Tesy);
  }
}
