import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../shared/pessoas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formPessoas!: FormGroup;

  ngOnInit() {
    this.createForm(new Pessoa());
  }

  createForm(pessoas: Pessoa) {
    this.formPessoas = new FormGroup({
      nome: new FormControl(pessoas.nome),
      email: new FormControl(pessoas.email),
      telefone: new FormControl(pessoas.telefone),
    });
  }
  onSubmit() {
    console.log(this.formPessoas.value);
    //Limpar Formulário após cadastro
    this.formPessoas.reset(new Pessoa());
    alert('Cadastro realizado com sucesso');
  }
}
