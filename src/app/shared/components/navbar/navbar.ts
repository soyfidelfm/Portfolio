import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // 👈 FALTABA ESTO
  imports: [RouterLink, RouterLinkActive], // 👈 ESTO ES LA CLAVE
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {}