import { Component } from '@angular/core';

export class Product {
  naam: string;
  beschrijving: string;
  prijs: number;

}

const PRODUCTS: Product[] = [
  { naam: 'hondebak', beschrijving: 'bak van hond', prijs:50 },
  { naam: 'kattenbak', beschrijving: 'bak van kat', prijs:50 },
  { naam: 'muilenkorf', beschrijving: 'muilenkorf voor de hond', prijs:50 }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="products">
      <li *ngFor="let product of products"
        [class.selected]="product === selectedProduct"
        (click)="onSelect(product)">
        <span class="badge">{{product.naam}}</span> {{product.beschrijving}}
         <span class="pas">{{product.prijs}}</span>
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <div><label>naam: </label>{{selectedProduct.naam}}</div>
      <div><label>beschrijving: </label>{{selectedProduct.beschrijving}}</div>
      <div><label>prijs: </label>{{selectedProduct.prijs}}</div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .products {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 25em;
    }
    .products li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .products li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .products li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .products .text {
      position: relative;
      top: -3px;
    }
    .products .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
      border-style: solid;
      border-width: medium;
  }
  
    .products {
    border-style: solid;
    border-width: medium;
}
  `]
})
export class AppComponent {
  title = 'Petstore';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
