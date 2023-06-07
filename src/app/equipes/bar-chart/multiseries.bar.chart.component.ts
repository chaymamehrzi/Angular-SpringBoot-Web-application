import { Component } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html'
})
export class MultiSeriesBarChartComponent {
  addSymbols = (e: any) => {
	  var suffixes = ["", "K", "M", "B"];
 
	  var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
	  if(order > suffixes.length - 1)
		order = suffixes.length - 1;
 
	  var suffix = suffixes[order];
	  return (e.value / Math.pow(1000, order) + suffix);
	}
	
	chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Oil Reserves and Production "    
	  },
	  axisY2: {
		title:"Production (bbl/day)",
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  axisY: {
		title: "Reserves(MMbbl)",
		includeZero: true,
		labelFormatter: this.addSymbols
	  },
	  legend: {
		cursor: "pointer",
		itemclick: (e: any) => {
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  } else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{        
		  type: "bar",  
		  showInLegend: true, 
		  legendText: "Reserves in MMbbl",
		  dataPoints: [      
			{ y: 267017, label: "Saudi Arabia" },
			{ y: 116000, label: "Russia" },
			{ y: 20682, label: "US" },
			{ y: 154580, label: "Iran" },
			{ y: 20350, label: "China" },
			{ y: 175200, label: "Canda" },
			{ y: 97800, label: "UAE" },
			{ y: 297571, label: "Venezuela" }
		  ]
		}, {        
		  type: "bar",  
		  axisYType: "secondary",
		  showInLegend: true,
		  legendText: "production in bbl/day",
		  dataPoints: [      
			{ y:11150000, label: "Saudi Arabia" },
			{ y:10210000, label: "Russia" },
			{ y:9023000 , label: "US" },
			{ y:4231000 , label: "Iran" },
			{ y:4073000 , label: "China" },
			{ y:3592000, label: "Canda" },
			{ y:3087000, label: "UAE" },
			{ y:2453000, label: "Venezuela" }
		  ]
		}]
	}	
}                              