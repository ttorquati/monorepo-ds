import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('dataTheme', {static: false}) dataTheme: ElementRef;

  darkmodeToggle() {
    if (this.dataTheme.nativeElement.getAttribute('data-theme') === 'light') {
        this.dataTheme.nativeElement.setAttribute('data-theme', 'dark');
        return;
    }
    
    this.dataTheme.nativeElement.setAttribute('data-theme', 'light');
  }
}
