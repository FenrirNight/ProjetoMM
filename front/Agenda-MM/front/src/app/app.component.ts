import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormularioService } from './pessoas/formulario/formulario.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private formularioService: FormularioService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Agenda-MM';
  }
