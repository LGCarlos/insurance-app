import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/CommonModels';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clients!: ClientModel[];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getClients().subscribe((res) => {
      this.clients = res;
    });
  }
}
