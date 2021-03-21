import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  darkmodeToggle(ev) {
    const dataTheme = document.querySelector('.container__signup');

    if (dataTheme.getAttribute('data-theme') === 'light') {
        dataTheme.setAttribute('data-theme', 'dark');
        return;
    }

    dataTheme.setAttribute('data-theme', 'light');
  }
}
