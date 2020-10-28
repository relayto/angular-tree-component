import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: any[] = [
    { title: 'Getting Started', children: null },
    { title: 'Fundamentals', children:
        [
          { title: 'nodes', url: 'fundamentals/nodes', children: null },
          { title: 'options', url: 'fundamentals/options', children: null }
        ]
    },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/github-icon.svg')
    );
    iconRegistry.addSvgIcon(
      'tree-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/tree-logo.svg')
    );
  }
}
