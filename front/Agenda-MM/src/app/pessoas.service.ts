import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas/shared/pessoas';
import { agenda } from './pessoas/shared/mock-pessoas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  }
}
