import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/pessoas';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { PessoasService } from 'src/app/pessoas.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formPessoas: FormGroup;


  constructor(private pessoasService : PessoasService) { }

  ngOnInit() {
    this.createForm(new Pessoa());
  }

  createForm(pessoas: Pessoa) {
    this.formPessoas = new FormGroup({
    nome: new FormControl (pessoas.nome),
    email: new FormControl (pessoas.email),
    telefone: new FormControl (pessoas.telefone)
  })

}
onSubmit() {
  console.log(this.formPessoas.value);

  //Limpar Formulário após cadastro
  this.formPessoas.reset(new Pessoa());

  }

}
