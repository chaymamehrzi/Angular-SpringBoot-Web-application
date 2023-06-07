import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { stats } from 'src/app/core/model/stats';
import { EquipeService } from 'src/app/core/services/equipe.service';
     
@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html'
})
export class BarChartComponent implements OnInit {
  public dataPoints2 : stats[] =[] ;
  constructor(private equipeService: EquipeService,){
    this.equipeService.getAllStats().subscribe(
      (X:stats[])=>{
        this.dataPoints2 = X;
        //this.chartOptions.data.
        this.chartOptions = {
          title:{
            text: "Total des joueurs par equipe"
          },
          animationEnabled: true,
          axisY: {
            includeZero: true,
            suffix: "K"
          },
          data: [{
            type: "bar",
             dataPoints: this.dataPoints2,
          }]
          
        }	
        console.log("constructer",this.dataPoints2);
        console.log("data",this.chartOptions);

      },

    )
  }
  chartOptions = {
   
  }	
  
  ngOnInit(): void {
    console.log("beforebefore",this.dataPoints2);

    this.equipeService.getAllStats().subscribe(
      (X:stats[])=>{
        this.dataPoints2 = X;
        console.log("nginit",this.dataPoints2);
    
      },

    )
    console.log("after",this.dataPoints2);

  }
}                            