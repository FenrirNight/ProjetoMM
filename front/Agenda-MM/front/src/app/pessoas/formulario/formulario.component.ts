import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
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
  title = 'Agenda-MM';
  pessoas: Pessoa[] = [];

  constructor(private service: FormularioService) {}

  ngOnInit() {
    this.createForm(new Pessoa());
    this.getPessoas();
  }

  createForm(pessoas: Pessoa) {
    this.formPessoas = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
    });
  }

  getPessoas(): void {
    this.service.getPessoas().subscribe((pessoas) => (this.pessoas = pessoas));
  }

  onSubmit() {
    this.service
      .addPessoas(this.formPessoas.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log('message::::', data);
      });

      this.formPessoas.reset();
      alert('Cadastro realizado com sucesso');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
}
