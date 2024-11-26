import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/app/interfaces/phone';
import { PhoneService } from 'src/app/services/phone.service';


@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent {
  phone?: Phone;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService
  ) {}

  ngOnInit(): void {
    const phoneId = this.route.snapshot.paramMap.get('id')!;
    this.phoneService.getPhoneById(phoneId).subscribe((phone) => {
      this.phone = phone;
    });
  }
}
