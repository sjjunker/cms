import {
  Component,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  @ViewChild('subject') subject!: ElementRef;
  @ViewChild('msgText') message!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender = 'Sandi Junker';

  onSendMessage() {
    const newSubject = this.subject.nativeElement.value;
    const newMsgText = this.message.nativeElement.value;

    const newMessage = new Message(
      5,
      newSubject,
      newMsgText,
      this.currentSender
    );

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.message.nativeElement.value = '';
  }
}
