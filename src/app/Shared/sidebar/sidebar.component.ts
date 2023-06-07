import { Component, OnInit } from '@angular/core';
import { etudiants } from 'src/app/core/model/etudiants';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role: String;
  et:etudiants;
   
  constructor(private loginService: LoginService) { 
  }

  ngOnInit(): void {
    this.role = this.loginService.getUserRole();
      this.et= this.loginService.getUser().etudiant;

  }

}

