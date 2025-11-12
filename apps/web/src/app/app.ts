import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatWindow, PrimarySidebar, SecondarySidebar } from '@bolo/ui/components';

@Component({
  imports: [PrimarySidebar, SecondarySidebar, ChatWindow, RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web';
}
