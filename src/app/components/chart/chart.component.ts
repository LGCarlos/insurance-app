import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  labels: string[] = this.commonService.labelsChart;
  data: any = [];

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    // Navigate to home if there are not results
    this.commonService.labelsChart.length
      ? null
      : this.router.navigate([ConstantsService.UrlsComponents.Home]);
    // Generate Statistics
    this.generateDataStatistics(
      ConstantsService.insurances,
      this.commonService.primaryClientsResults,
      ConstantsService.insuranceString
    );

    setTimeout(() => {
      this.setData();
    }, 0);
  }
  setData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#77C6F4', '#67BC9B', '#F1CD69', '#8772ED'],
          hoverBackgroundColor: ['#77C6F4', '#67BC9B', '#F1CD69', '#8772ED'],
        },
      ],
    };
  }
  generateDataStatistics(typeArr: any[], dataArr: any[], propertie: string) {
    let arrLength: any = [];
    let product: string = '';
    // Filter array by propertie
    typeArr.forEach((obj: any) => {
      product = obj.type;
      arrLength = dataArr.filter((element) => element[propertie][product]);
      this.data = [...this.data, arrLength.length];
    });
  }
}
