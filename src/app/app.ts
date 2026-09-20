import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { VisitorPingService } from './core/services/visitor-ping.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly visitorPing = inject(VisitorPingService);
  protected readonly title = signal('portfolio');

  ngOnInit(): void {
    this.visitorPing.notifyVisit();
  }
}
