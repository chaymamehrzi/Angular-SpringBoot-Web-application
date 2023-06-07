import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { etudiants } from 'src/app/core/model/etudiants';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { EventEmitter } from 'stream';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
 @Input() etudiant1:any; 
  constructor(private etudserv:EtudiantService, private route:Router,private current:ActivatedRoute) {
 
  }
 
  ngOnInit(): void {
  
  }
 
  


}
