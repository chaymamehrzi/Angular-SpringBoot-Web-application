import { Component } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html'
})
export class StackedBar100ChartIndexlabelComponent {
  chartOptions = {
    theme: 'light2',
    title:{
      text: "Time Spent in Holiday Season"
    },
    animationEnabled: true,
    axisY:{
      title: "Percent",
      suffix: "%"
    },
    legend :{
      horizontalAlign: 'center',
      verticalAlign: 'bottom'
    },
    toolTip: {
      shared: true
    },
    data:[{        
      type: "stackedBar100",
      showInLegend: true, 
      color: "#BBDEFB",
      name: "With Friends",
      indexLabel: "#percent%",
      toolTipContent: "<b>{label}</b><br/><span style='\"'color:{color}'\"'>{name}:</span> #percent%",
      dataPoints: [
        { y: 320, label: "Shah" },
        { y: 300, label: "Joe" },
        { y: 400, label: "Fin" },
        { y: 220, label: "Larry" }
      ]
    },
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: "Eating Out",
      color: "#80DEEA",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 320, label: "Shah" },
        { y: 320, label: "Joe" },
        { y: 280, label: "Fin" },
        { y: 420, label: "Larry" }
      ]
    },
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: "Reading",
      color: "#FFAB91",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 120, label: "Shah" },
        { y: 120, label: "Joe" },
        { y: 300, label: "Fin" },
        { y: 120, label: "Larry" }
      ]
    },
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: "Shopping",
      color: "#B0BEC5",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 320, label: "Shah" },
        { y: 220, label: "Joe" },
        { y: 150, label: "Fin" },
        { y: 420, label: "Larry" }
      ]
    },
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: "Travel",
      color: "#BCAAA4",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 120, label: "Shah" },
        { y: 160, label: "Joe" },
        { y: 140, label: "Fin" },
        { y: 80, label: "Larry" }
 
      ]
    },
		{        
      type: "stackedBar100",
      showInLegend: true, 
      name: "Internet",
      color: "#A5D6A7",
      indexLabel: "#percent%",
      toolTipContent: "{name}: #percent%",
      dataPoints: [
        { y: 104, label: "Shah" },
        { y: 120, label: "Joe" },
        { y: 300, label: "Fin" },
        { y: 420, label: "Larry" }
      ]
    }]
  }				
}                              