import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../shared/pessoas';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.rootURL + '/pessoas');
  }

  addPessoas(pessoa: Pessoa) {
    return this.http.post(this.rootURL + '/pessoas', { pessoa });
  }
}
