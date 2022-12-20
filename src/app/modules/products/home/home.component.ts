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
  //Autocomplete Input
  passportsList: any = [];
  filteredPassports!: any[];
  passport!: any[];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getClients().subscribe((res) => {
      this.clients = res;
      res.forEach((client) =>
        this.passportsList.push(
          (({ passport }) => ({ name: passport }))(client)
        )
      );
    });
  }

  filterPassport(event: { query: any }) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    this.passportsList.forEach((passport: { name: string }) => {
      passport.name.toLowerCase().indexOf(query.toLowerCase()) === 0
        ? filtered.push(passport)
        : null;
    });

    this.filteredPassports = filtered;
  }
}
