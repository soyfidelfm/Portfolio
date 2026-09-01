import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  isSending = false;
  statusMessage = '';
  isSuccess = false;

  // Claves de EmailJS
  private readonly SERVICE_ID = 'service_r6rgmen';
  private readonly TEMPLATE_ID = 'template_2x15vxj'; // ID de la plantilla de notificación interna
  private readonly PUBLIC_KEY = 'ucldgL879wkI1OnLX';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async sendEmail(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.statusMessage = '';

    const formData = this.contactForm.value;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      this.isSuccess = true;
      this.statusMessage = 'Message sent successfully!';
      this.contactForm.reset();
    } catch (error) {
      this.isSuccess = false;
      this.statusMessage = 'Failed to send message. Please try again later.';
      console.error('EmailJS Error:', error);
    } finally {
      this.isSending = false;
    }
  }
}