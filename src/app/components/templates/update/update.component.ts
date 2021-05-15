import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstoqueService } from '../estoque/estoque.service';
import { Estoque } from '../estoque/estoque.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  index: number = 0;
  produtos: Estoque[] = [];
  quantidade: number = 0;

  constructor(private route:ActivatedRoute, public estoqueService:EstoqueService) { 
    this.index = this.route.snapshot.params.id;
    this.produtos[0] = estoqueService.getItemEstoque(this.route.snapshot.params.id);
  }

  ngOnInit(): void {
   
  }

  onSubmit(fomr:any){
    
  }

  adicionar(): void {
    this.estoqueService.adicionarQTDE(this.index, this.quantidade);
    alert("Adicionado com sucesso!")
  }

  remover(): void {
    this.estoqueService.removerQTDE(this.index, this.quantidade);
    alert("Removido com sucesso!")
  }
}
