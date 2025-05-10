import { Component } from '@angular/core';
import { Message } from '../message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message(1, 'Test Subject 1', 'Test Message 1', 'Test Sender 1'),
    new Message(2, 'Test Subject 2', 'Test Message 2', 'Test Sender 2'),
    new Message(3, 'Test Subject 3', 'Test Message 3', 'Test Sender 3'),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
