import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
})
export class Dashboard2Component implements OnInit {
  config: any;
  // Area chart start
  public chartAreaOptions = {
    xkey: 'w',
    ykeys: ['x', 'y', 'z'],
    labels: ['X', 'Y', 'Z'],
    pointSize: 0,
    lineWidth: 0,
    resize: true,
    fillOpacity: 0.8,
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    hideHover: 'auto',
    lineColors: ['#dc79e0', '#c5c5c5', '#4cd2ef'],
  };
  public chartAreaData = [
    { w: '2011 Q1', x: 2, y: 0, z: 0 },
    { w: '2011 Q2', x: 50, y: 15, z: 5 },
    { w: '2011 Q3', x: 15, y: 50, z: 23 },
    { w: '2011 Q4', x: 45, y: 12, z: 7 },
    { w: '2011 Q5', x: 20, y: 32, z: 55 },
    { w: '2011 Q6', x: 39, y: 67, z: 20 },
    { w: '2011 Q7', x: 20, y: 9, z: 5 },
  ];
  // Area chart end
  constructor() {}
  ngOnInit() {}
}
