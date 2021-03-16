import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Clientes } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  cliente!: Clientes;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.cliente.id!).subscribe(() => {
      this.productService.showMessage("Cadastro excluído com sucesso!")
      this.router.navigate(["/clientes"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
