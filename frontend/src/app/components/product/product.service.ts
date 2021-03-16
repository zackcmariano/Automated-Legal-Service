import { Clientes } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-sucess']
    })
  }

  create(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.baseUrl, cliente)
  }

  read(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseUrl)
  }

  readById(id: string): Observable<Clientes> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Clientes>(url)
  }

  update(cliente: Clientes): Observable<Clientes> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Clientes>(url, cliente)
  }

  delete(id: number): Observable<Clientes> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Clientes>(url);
  }
}
