import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

  showModal = false;
  contactForm!: FormGroup;
  contacts: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.contactForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^9\d{8}$/)
      ]
    ]
  });

  this.loadContacts();
}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  loadContacts() {
  const saved = localStorage.getItem('contacts');
  this.contacts = saved ? JSON.parse(saved) : [];
}

  saveContact() {
  if (this.contactForm.invalid) return;

  const newContact = this.contactForm.value;

  // Obtener contactos previos
  const saved = localStorage.getItem('contacts');
  let contacts = saved ? JSON.parse(saved) : [];

  // Agregar el nuevo
  contacts.push(newContact);

  // Guardar nuevamente
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Actualizar lista en pantalla
  this.loadContacts();

  this.closeModal();
}


}
