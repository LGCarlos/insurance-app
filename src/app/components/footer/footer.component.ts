import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  logo: string = `${ConstantsService.imagesPath}logo.svg`;
  year!: number;
  gitHub: string = ConstantsService.GitHub;
  linkedin: string = ConstantsService.Linkedin;

  constructor() {}

  ngOnInit(): void {
    // Get current year
    let date = new Date();
    this.year = date.getFullYear();
  }
}
