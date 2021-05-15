import { Injectable } from '@angular/core';
import { Estoque } from './estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private produtos : Estoque[] 

  constructor() { 
    this.produtos = [
      new Estoque(1,"Pedal",12,200,50),
      new Estoque(2,"Chave Allen",56,110,60),
      new Estoque(3,"Chave de Boca",23,50,25),
      new Estoque(4,"Chave de Fenda",20,70,80),
      new Estoque(5,"Grifo",13,80,20),
      new Estoque(6,"Bateria",16,80,45),
      new Estoque(7,"Corrente Dentada",31,100,80),
      new Estoque(8,"Freio",50,70,50)
    ]
  }

  getEstoque(){
    return this.produtos
  }

  getItemEstoque(i:number){
    return this.produtos[i]
  }

  adicionarQTDE(i:number, quantidade_inserida:number){
    this.produtos[i].qtddisponivel = this.produtos[i].qtddisponivel + quantidade_inserida;
  }

  removerQTDE(i:number, quantidade_inserida:number){
    this.produtos[i].qtddisponivel = this.produtos[i].qtddisponivel - quantidade_inserida;
  }

  
}
