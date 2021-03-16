import { Clientes } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  cliente!: Clientes[];
  displayedColumns = ['id', 'name', 'adv', 'atend', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(cliente => {
      this.cliente = cliente
      console.log(cliente)
    })
  }

}
