import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/api/user-api.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: string = '';
  label: string = '';
  langIcon: string = './../../../assets/images/en.png';
  constructor(private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.userApiService.search({ token: ConstantsService.Token }).subscribe(
      (res) => {
        this.user = res.user;
        // Get first letter of User
        this.label = this.user.charAt(0);
      },
      (error) => {
        this.user = '';
      }
    );
  }
}
