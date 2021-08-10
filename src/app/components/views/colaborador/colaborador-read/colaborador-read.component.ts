import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { ColaboradorService } from "src/app/components/services/colaborador.service";
import { Colaborador } from "../colaborador.model";

@Component({
  selector: "app-colaborador-read",
  templateUrl: "./colaborador-read.component.html",
  styleUrls: ["./colaborador-read.component.css"],
})
export class ColaboradorReadComponent implements OnInit {
  searchString: string = "";
  displayedColumns: string[] = [
    "id",
    "nome",
    "sobrenome",
    "cargo",
    "datadenascimento",
    "endereco",
    "acoes",
  ];
  colaboradores: Colaborador[] = [];
  users: any[] = [];
  filteredUsers: any[] = [];
  filterBy: any;
  constructor(private service: ColaboradorService, private router: Router) {}
  dataSource = new MatTableDataSource<Colaborador>(this.colaboradores);

  ngOnInit(): void {
    this.findAll();
    this.addData();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.users = resposta;
      this.filteredUsers = [...this.users];
      this.colaboradores = resposta;
    });
  }

  navegarParaColaboradorCreate() {
    this.router.navigate(["colaboradores/create"]);
  }
  addData() {
    this.dataSource.data = this.colaboradores;
    console.log(this.dataSource.data);
  }
  filter() {
    this.filteredUsers = [
      ...this.users.filter((user) => user.nome.includes(this.filterBy)),
    ];
  }
}
