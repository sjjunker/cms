import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent {
  contact: Contact = new Contact(
    10,
    'John Doe',
    'blah@blah.com',
    '123-456-7890',
    'https://via.placeholder.com/150',
    null
  );
}
