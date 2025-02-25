import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


@Component({
  selector: 'app-root',
  imports: [ HomepageComponent, RouterModule],
  template: `
    <main>
        <header class="brand-name">
          <div class="container">
            <a href="/"><img class="brand-logo" src="./assets/CarAndGarageLogo.jpg" alt="logo" aria-hidden="true" /></a>
            <h1 class="imageflexcontent">{{title}}</h1>
            <div class="header-link-container">
              <a class="header-link" href="/garages">Garages</a>
              <a class="header-link" href="/cars">Cars</a>
            </div>
            <div style="position: absolute; right:0; margin-right: 10px">
            <p id="module" style="align-self:flex-start; margin-bottom:0px; border-radius: 5px; border-color: var(--shadow-color); padding-left:5px;" class="gradient-background">*Development Environment</p>
            </div>
          </div>
          
        </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cars&Garages';
}
