import { Injectable } from '@angular/core';

import { Phone } from '../interfaces/phone';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private dataUrl = 'assets/data.json'; // Path to your JSON file

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Fetch all phones
  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.dataUrl);
  }

  // Fetch a single phone by ID
  getPhoneById(id: string): Observable<Phone | undefined> {
    return new Observable((observer) => {
      this.getPhones().subscribe((phones) => {
        const phone = phones.find((phone) => phone.id === id);
        observer.next(phone);
        observer.complete();
      });
    });
  }
    
  // private phones: Phone[] = [
  //   {
  //     id: 1,
  //     name: 'iPhone 14',
  //     brand: 'Apple',
  //     price: 999,
  //     description: 'Latest Apple smartphone with A16 Bionic chip.',
  //     imageUrl: 'assets/images/iphone14.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Galaxy S23',
  //     brand: 'Samsung',
  //     price: 899,
  //     description: 'Flagship Samsung phone with Snapdragon processor.',
  //     imageUrl: 'assets/images/galaxy-s23.jpg',
  //   },
  // ];

  // getPhones(): Phone[] {
  //   return this.phones;
  // }

  // getPhoneById(id: number): Phone | undefined {
  //   return this.phones.find((phone) => phone.id === id);
  // }
}
