import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ColaboradorService } from "src/app/components/services/colaborador.service";
import { Colaborador } from "../colaborador.model";

@Component({
  selector: "app-colaborador-delete",
  templateUrl: "./colaborador-delete.component.html",
  styleUrls: ["./colaborador-delete.component.css"],
})
export class ColaboradorDeleteComponent implements OnInit {
  colaborador: Colaborador = {
    id: "",
    nome: "",
    sobrenome: "",
    cargo: "",
    dataDeNascimento: "",
    endereco: "",
  };
  constructor(
    private service: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.colaborador.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.colaborador.id!).subscribe((resposta) => {
      this.colaborador = resposta;
      console.log(resposta);
    });
  }

  delete(): void {
    this.service.delete(this.colaborador.id!).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(["colaboradores"]);
      this.service.mensagem("Colaborador deletado com sucesso!")
    });
    }

  cancel(): void {
    this.router.navigate(["colaboradores"]);
  }
}
