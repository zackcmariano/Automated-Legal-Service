import { Clientes } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  cliente!: Clientes;

  constructor(private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  updateProduct(): void{
    this.productService.update(this.cliente).subscribe(() => {
      this.productService.showMessage('Cadastrado atualizado com sucesso!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
