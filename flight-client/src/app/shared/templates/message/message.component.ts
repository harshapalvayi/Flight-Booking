import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  @Input() text!: string;
  @Input() severity!: string;
  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.messageService.emitMessage.subscribe();
  }

}
