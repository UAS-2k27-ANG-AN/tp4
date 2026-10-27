import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ProductItemComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  title = 'Liste des produits';
  newProduct = '';
  products = ['Chaussures', 'T-shirt', 'Casquette'];

  addProduct(): void {
    if (this.newProduct.trim()) {
      this.products.push(this.newProduct.trim());
      this.newProduct = '';
    }
  }

  removeProduct(name: string): void { this.products = this.products.filter((product) => product !== name); }
}
