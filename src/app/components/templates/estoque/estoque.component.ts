import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque.model';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  produtos : Estoque[]

  constructor(private listService : EstoqueService) { 
    this.produtos = listService.getEstoque()
  }

  ngOnInit(): void {
  }

}
