import { Component } from '@angular/core';

import { Phone } from 'src/app/interfaces/phone';
import { PhoneService } from 'src/app/services/phone.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phones: Phone[] = [];

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe((phones) => {
      this.phones = phones;
    });
  }  
}
