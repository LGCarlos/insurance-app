import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserApiService } from 'src/app/services/api/user-api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: string = '';
  label: string = '';
  langIcon: string = `${ConstantsService.imagesPath}en.png`;
  logo: string = `${ConstantsService.imagesPath}logo.svg`;
  urls: any;

  constructor(
    private userApiService: UserApiService,
    private translateService: TranslateService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.urls = ConstantsService.UrlsComponents;
    this.userApiService.search({ token: ConstantsService.Token }).subscribe(
      (res) => {
        this.user = res.user ? res.user : '';
        // Get first letter of User
        this.label = this.user.charAt(0);
      },
      (error) => {
        this.user = '';
      }
    );
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.langIcon = `${ConstantsService.imagesPath}${lang}.png`;
  }
  goToStatistics() {
    this.translateService.get('common.labels').subscribe((res: string[]) => {
      this.commonService.labelsChart = res;
    });
  }
}
