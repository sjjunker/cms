import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'cms-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  selectedContact: Contact;

  onContactSelected(contact: Contact) {
    this.selectedContact = contact;
  }
}
