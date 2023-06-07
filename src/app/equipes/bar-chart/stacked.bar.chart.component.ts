import { Component } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './chart.component.html'
})
export class StackedBarChartComponent {
  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "Quarterly Sales",
      fontFamily: "Calibri, Arial, sans-serif"
    },
    axisX:{
      title: "Quarter",
      reversed: true
    },
    axisY:{
      title: "Sales",
      prefix: "$",
      suffix: "k",
      includeZero: true
    },
    toolTip:  {
      shared: true
    },
    data: [{
      type: "stackedBar",
      name: "Product A",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#edae49",
      dataPoints: [
        {  y: 42, label: "Q1"},
        {  y: 53, label: "Q2" },
        {  y: 47, label: "Q3" },
        {  y: 60, label: "Q4" }
      ]
    }, {
      type: "stackedBar",
      name: "Product B",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#df7c52",
      dataPoints: [
        {  y: 48, label: "Q1"},
        {  y: 62, label: "Q2" },
        {  y: 55, label: "Q3" },
        {  y: 74, label: "Q4" }
      ]
    }, {
      type: "stackedBar",
      name: "Product C",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#d1495b",
      dataPoints: [
        {  y: 46, label: "Q1"},
        {  y: 60, label: "Q2" },
        {  y: 58, label: "Q3" },
        {  y: 70, label: "Q4" }
      ]
    }, {
      type: "stackedBar",
      name: "Product D",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#9d5568",
      dataPoints: [
        {  y: 32, label: "Q1"},
        {  y: 45, label: "Q2" },
        {  y: 54, label: "Q3" },
        {  y: 46, label: "Q4" }
      ]
    }]
  }	
}                              