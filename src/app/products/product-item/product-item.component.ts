import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {
  @Input() name = '';
  @Output() delete = new EventEmitter<string>();
  onDelete(): void { this.delete.emit(this.name); }
}
