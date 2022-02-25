import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../shared/pessoas';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getPessoas() {
    return this.http.get(this.rootURL + '/pessoas');
  }

  addPessoas(pessoa: Pessoa) {
      return this.http.post(this.rootURL + '/pessoas', {pessoa});
  }
}
