import { Component } from '@angular/core';

@Component({
  selector: 'app-marque',
  imports: [],
  templateUrl: './marque.component.html',
  styleUrl: './marque.component.css',
})
export class MarqueComponent {
  marque = ['6 Months Internship', 'Bali Solution Biz', 'Frontend Development', 'API Integration', 'Real-World Projects']
  loopMarque = Array.from({ length: 5 }, () => this.marque).flat();
}
