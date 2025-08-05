import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';
import { SkillsService } from '../../services/skills/skills.service';
import { HttpClient } from '@angular/common/http';
// import { isPlatformBrowser } from '@angular/common';
// import { Inject, PLATFORM_ID } from '@angular/core';



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

  constructor(private skillsService: SkillsService) {
    this.fetchSkills();
  }

  fetchSkills(): void {
    this.skillsService.getSkillsData().subscribe(data => {
      console.log('Skills data fetched:', data);
      this.frontendSkills = data.frontendSkills;
      this.backendSkills = data.backendSkills;
      this.toolsSkills = data.toolsSkills;
    });
  }
}

