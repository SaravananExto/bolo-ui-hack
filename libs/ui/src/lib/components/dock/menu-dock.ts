import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ui-cmp-menu-dock',
  imports: [Dock, TooltipModule],
  templateUrl: './menu-dock.html',
  styleUrl: './menu-dock.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDock {

  navigateTo = output<string>()

  position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

  items: MenuItem[] = [
    {
      label: "New Conversation",
      icon: "./New Conversation Rollover.svg",
      command: (event) => {
        this.navigateTo.emit('')
      },
    },
    {
      label: "Configuration",
      icon: "./Configuration Rollover.svg",
    },
    {
      label: "Datasets",
      icon: "./Datasets Rollover.svg",
      command: () => {
        this.navigateTo.emit('datasets');
      },
    },
    {
      label: "Jobs",
      icon: "./Jobs Rollover.svg",
    },
    {
      label: "Document Learning",
      icon: "./Document Learning Rollover.svg",
      command: () => {
        this.navigateTo.emit("document-learning")
      }
    },
    {
      label: "Document Manager",
      icon: "./Document Manager Rollover.svg",
    }
  ]
}
