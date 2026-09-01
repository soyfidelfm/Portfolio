import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { PROJECTS } from '../../core/data/projects.data';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ProjectCardComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  projects = PROJECTS.slice(0, 3);
  
  showModal = true;
  userName = '';
  userEmail = '';
  userIp = 'Fetching IP...';
  userLocation = 'Requesting permission...';
  private emailSent = false;

  ngOnInit() {
    this.fetchIpAndLocation();
  }

  fetchIpAndLocation() {
    // Fetch public IP address
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        this.userIp = data.ip;
      })
      .catch(() => {
        this.userIp = 'Not available';
      });

    // Request Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        },
        () => {
          this.userLocation = 'Permission denied by user';
        },
        { timeout: 10000 }
      );
    } else {
      this.userLocation = 'Geolocation not supported';
    }
  }

  confirmData() {
    this.sendEmail('Data Registered (Confirmed)');
    this.showModal = false;
  }

  closeModal() {
    if (!this.emailSent) {
      this.sendEmail('Popup Closed / Canceled (No input)');
    }
    this.showModal = false;
  }

  private sendEmail(actionStatus: string) {
    if (this.emailSent) return;
    this.emailSent = true;

    const templateParams = {
      to_email: 'fidelfilio@icloud.com',
      visitor_name: this.userName.trim() || 'Anonymous / Not provided',
      visitor_email: this.userEmail.trim() || 'Not provided',
      visitor_ip: this.userIp,
      visitor_location: this.userLocation,
      action: actionStatus
    };

    // Replace with your actual EmailJS credentials
    emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams, 'TU_PUBLIC_KEY')
      .catch(err => console.error('Error sending automated email:', err));
  }
}