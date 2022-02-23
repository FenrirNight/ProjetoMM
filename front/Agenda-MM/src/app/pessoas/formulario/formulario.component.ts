import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../shared/pessoas';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formPessoas: FormGroup;


  constructor() { }

  ngOnInit() {
    this.createForm(new Pessoas());
  }

  createForm(pessoas: Pessoas) {
    this.formPessoas = new FormGroup({
    nome: new FormControl (pessoas.nome),
    email: new FormControl (pessoas.email),
    telefone: new FormControl (pessoas.telefone)
  })
}
onSubmit() {
  console.log(this.formPessoas.value);

  //Limpar Formulário após Cadastro
  this.formPessoas.reset(new Pessoas());

  }
}
