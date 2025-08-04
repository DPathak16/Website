import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Site',
      description: 'A beautiful site built with Angular 19',
      image: 'assets/portfolio-site.png',
      type: 'Web App',
      tech: ['Angular', 'TypeScript', 'Node.js'],
      demo: 'https://portfolio-site-demo.com',
      repo: 'https://github.com/your-username/portfolio-site'
    },
    {
      title: 'Todo App',
      description: 'A fully functional todo app using RxJS',
      image: 'assets/todo-app.png',
      type: 'Web App',
      tech: ['Angular', 'RxJS', 'Node.js'],
      demo: 'https://todo-app-demo.com',
      repo: 'https://github.com/your-username/todo-app'
    },
  ];
}
