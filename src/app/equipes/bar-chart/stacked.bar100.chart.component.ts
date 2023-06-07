import { Component } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html'
})
export class StackedBar100ChartComponent {
  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "🍨ICE CREAM SALES🍨",
      fontFamily: "Calibri, Arial, sans-serif"
    },
    axisX:{
      title: "Quarter",
      reversed: true
    },
    axisY:{
      suffix: "%"
    },
    toolTip:  {
      shared: true
    },
    data: [{
      type: "stackedBar100",
      name: "Blueberry",
      showInLegend: "true",
      yValueFormatString: "#,###'%'",
      color: "#5570b2",
      dataPoints: [
        {  y: 40.75, label: "Q1"},
        {  y: 27.3, label: "Q2" },
        {  y: 11, label: "Q3" },
        {  y: 34, label: "Q4" }
      ]
    }, {
      type: "stackedBar100",
      name: "Vanilla",
      showInLegend: "true",
      yValueFormatString: "#,###'%'",
      color: "#f6d788",
      dataPoints: [
        {  y: 12.75, label: "Q1"},
        {  y: 35.7, label: "Q2" },
        {  y: 59, label: "Q3" },
        {  y: 18, label: "Q4" }
      ]
    }, {
      type: "stackedBar100",
      name: "Chocolate",
      showInLegend: "true",
      yValueFormatString: "#,###'%'",
      color: "#8D5531",
      dataPoints: [
        {  y: 12.5, label: "Q1"},
        {  y: 25, label: "Q2" },
        {  y: 8, label: "Q3" },
        {  y: 23, label: "Q4" }
      ]
    }, {
      type: "stackedBar100",
      name: "Strawberry",
      showInLegend: "true",
      yValueFormatString: "#,###'%'",
      color: "#c13c3c",
      dataPoints: [
        {  y: 34, label: "Q1"},
        {  y: 12, label: "Q2" },
        {  y: 22, label: "Q3" },
        {  y: 25, label: "Q4" }
      ]
    }]
  }		
}                              