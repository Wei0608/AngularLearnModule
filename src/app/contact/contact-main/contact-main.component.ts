import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent {
  toggleModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.toggleModal = !this.toggleModal;
  }
}
