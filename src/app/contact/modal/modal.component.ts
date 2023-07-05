import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private e1: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.e1.nativeElement);
  }

  ngOnDestroy() {
    this.e1.nativeElement.remove();
  }
}
