import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Update the path below if 'header.component' is in a different folder
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
// import { ProjectsComponent } from './components/projects/projects.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import {OfferingsComponent} from './components/offerings/offerings.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    // FooterComponent,
    SkillsComponent,
    // ProjectsComponent,
    AboutComponent,
    ContactComponent,
    CommonModule,
    HttpClientModule, // /Add HttpClientModule here
    ExperienceComponent,
    EducationComponent,
    OfferingsComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Website';

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    window.scrollTo(0, 0);
  }
}
