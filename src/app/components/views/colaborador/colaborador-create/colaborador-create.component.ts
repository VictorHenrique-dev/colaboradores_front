import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ColaboradorService } from "src/app/components/services/colaborador.service";
import { Colaborador } from "../colaborador.model";

@Component({
  selector: "app-colaborador-create",
  templateUrl: "./colaborador-create.component.html",
  styleUrls: ["./colaborador-create.component.css"],
})
export class ColaboradorCreateComponent implements OnInit {
  Colaborador: Colaborador = {
    nome: "",
    sobrenome: "",
    cargo: "",
    dataDeNascimento: "",
    endereco: "",
  } as Colaborador;


  constructor(private service: ColaboradorService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.service.create(this.Colaborador).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['colaboradores']);
      this.service.mensagem("Colaborador cadastrado com sucesso!");
    }, error => {
      for(let i = 0; i < error.error.errors.length; i++) {
        this.service.mensagem(error.error.errors[i].defaultMessage)
      }
    });
  }

  cancel(): void {
    this.router.navigate(['colaboradores'])
  }
}
