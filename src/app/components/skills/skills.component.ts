import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';
// import { SkillsService } from '../../services/skills/skills.service';
import { HttpClient } from '@angular/common/http';
// import { ExperienceService } from '../../services/experience/experience.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, AvatarModule, TabsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  frontendSkills: any[] = [];
  backendSkills: any[] = [];
  toolsSkills: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
    this.fetchSkills();
  }

  fetchSkills(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<{ frontendSkills: any[], backendSkills: any[], toolsSkills: any[] }>('/assets/skills/skills-data.json').subscribe(data => {
        this.frontendSkills = data.frontendSkills;
        this.backendSkills = data.backendSkills;
        this.toolsSkills = data.toolsSkills;
      });
    }
  }
  }

