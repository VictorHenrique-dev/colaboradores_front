import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Colaborador } from "../views/colaborador/colaborador.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: "root",
})
export class ColaboradorService {

  url = "http://localhost:8080";

  // injetando o HttpClient
  constructor(private httpClient: HttpClient, private _snack: MatSnackBar) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  // Obtem todos os colaboradores
  findAll(): Observable<Colaborador[]> {
    const url = `${this.url}/colaboradores`
    return this.httpClient.get<Colaborador[]>(url)
    /*return this.httpClient
      .get<Colaborador[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));*/
  }

  // Obtem um colaborador pelo id
  findById(id: String): Observable<Colaborador> {
    const url = `${this.url}/colaboradores/${id}`
    return this.httpClient.get<Colaborador>(url)
  }

  
  // salva um colaborador
  create(Colaborador: Colaborador): Observable<Colaborador>{
    return this.httpClient.post<Colaborador>(this.url, Colaborador);
  }

  // deleta um colaborador
  delete(id: String):Observable<void>{
    const url = `${this.url}/colaboradores/${id}`
    return this.httpClient.delete<void>(url) 
   }

// utualiza um colaborador
  update(colaborador: Colaborador): Observable<Colaborador>{
    const url = `${this.url}/colaboradores/${colaborador.id}`
    return this.httpClient.put<Colaborador>(url, colaborador);
  }
  

  updateColaborador(Colaborador: Colaborador): Observable<Colaborador> {
    return this.httpClient
      .put<Colaborador>(
        this.url + "/" + Colaborador.id,
        JSON.stringify(Colaborador),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 6000
    })
  }
}
