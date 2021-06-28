import { Injectable } from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages: Message[] = [];
  public emitMessage  = new Subject<any>();

  constructor(private messageService: MessageService) { }

  showSuccess(message: any, details: any) {
    this.messages.push({severity: 'success', summary: `${message}`, detail: `${details}`});
  }

  showInfo(message: any, details: any) {
    this.messages.push({severity: 'info', summary: `${message}`, detail: `${details}`});
  }

  showWarn(message: any, details: any) {
    this.messages.push({severity: 'warn', summary: `${message}`, detail: `${details}`});
  }

  showError(toastMessage: { message: any; details: any; }) {
    const message = this.messages.push({severity: 'error', summary: `${toastMessage.message}`, detail: `${toastMessage.details}`});
    this.emitMessage.next(message);
  }

  showViaService() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessagesService'});
  }

  clear() {
    this.messages = [];
  }
}
