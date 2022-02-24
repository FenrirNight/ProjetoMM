import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pessoa } from './pessoas/shared/pessoas';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pessoas = [
      { pessoa_id: 1, nome: 'Aldir', email: 'teste@teste.com', telefone: '99 12345-6789' },
      { pessoa_id: 2, nome: 'Liun', email: 'teste1@teste.com', telefone: '99 45678-9999' }
    ];
    return {pessoas};
  }


  genId(pessoas: Pessoa[]): number {
    return pessoas.length > 0 ? Math.max(...pessoas.map(pessoas => pessoas.pessoa_id)) + 1 : 11;
  }
}
