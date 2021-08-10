import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ColaboradorService } from "src/app/components/services/colaborador.service";
import { Colaborador } from "../colaborador.model";

@Component({
  selector: "app-colaborador-update",
  templateUrl: "./colaborador-update.component.html",
  styleUrls: ["./colaborador-update.component.css"],
})
export class ColaboradorUpdateComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
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

  update(): void {
    this.service.update(this.colaborador).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(["colaboradores"]);
      this.service.mensagem("Colaborador atualizado com sucesso!");
    });
  }
  cancel(): void {
    this.router.navigate(["colaboradores"]);
  }
}
