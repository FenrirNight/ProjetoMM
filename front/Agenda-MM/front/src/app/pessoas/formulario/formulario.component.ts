import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pessoa } from '../shared/pessoas';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formPessoas!: FormGroup;

  constructor(private formularioService: FormularioService) {}

  title = 'Agenda-MM';

  ngOnInit() {
    this.createForm(new Pessoa());
  }

  createForm(pessoas: Pessoa) {
    this.formPessoas = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
    })
  };
    pessoas: Pessoa[] = [];

    destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.formularioService.addPessoas(this.formPessoas.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.formPessoas.reset();
    alert('Cadastro realizado com sucesso');
  })};

  // getAllUsers() {
  //   this.formularioService.getPessoas().pipe(takeUntil(this.destroy$)).subscribe((pessoas: Pessoa[]) => {this.pessoas = pessoas});
  // }

    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    };
  }
