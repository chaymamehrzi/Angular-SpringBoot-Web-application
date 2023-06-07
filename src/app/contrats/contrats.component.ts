import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from "./dialog/dialog.component";
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';
import { Student } from './Model/student';
@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  list: Student[];
  displayedColumns: string[] = ['dateDebutContrat', 'dateFinContrat', 'specialite', 'archive', 'montantContrat', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllContrats();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }


  editContrat(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    })

  }


  getAllContrats() {
    this.api.getContrat()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("error while fetching the Records!!")
        }
      })
  }






  DelContrat(id: number) {
    this.api.DelContrat(id)
      .subscribe({
        next: (res) => {
          alert("Contrat Deleted Successfullly");
          this.getAllContrats()

        }
        ,
        error: () => {
          alert("Error while deleting the Contrat!!")
        }
      })



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
