import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-export-contrat',
  templateUrl: './export-contrat.component.html',
  styleUrls: ['./export-contrat.component.css']
})
export class ExportContratComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  exportContratsPdf() {
    this.api.exportPdfContrats().subscribe(x => {
      const blob = new Blob([x], { type: 'application/pdf' });
      const nav = (window.navigator as any);
      if (nav && nav.msSaveOrOpenBlob) {
        nav.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = "contrats.pdf";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
        link.remove();

      }, 100);
    });
  }

}

