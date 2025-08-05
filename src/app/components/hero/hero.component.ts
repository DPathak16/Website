import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  lines: string[] = [
    'Daksh Pathak',
    'Web Developer',
    'Angular Developer',
    'Frontend Developer',
  ];

  @ViewChildren('lineRef') lineElements!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const lines = this.lineElements.map((el) => el.nativeElement);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-wrapper',
          start: 'top top',
          end: '+=400%',
          scrub: true,
          pin: true,
          markers: false,
        },
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transformPerspective: 1000,
        transformOrigin: 'center center',
      });

      lines.forEach((line, index) => {
        if (index === 0) {
          // Animate individual letters of first line as "dust"
          const letterEls = line.querySelectorAll('.letter');
          if (letterEls) {
            tl.to(
              letterEls,
              {
                opacity: 0,
                y: -60,
                x: -40, // scatter left/right
                scale: 1.8,
                filter: 'blur(8px)',
                stagger: {
                  each: 0.12,
                  from: 'start',
                },
                duration: 1.2,
                ease: 'power1.in',
              },
              '+=0.5'
            );
          }
        } else if (index === 1 || index === 2 || index === 3) {
          // "Web Developer" - fly through screen
          tl.fromTo(
            line,
            {
              opacity: 0,
              scale: 0.1,
              z: 0,
              filter: 'blur(8px)',
              transformPerspective: 1000,
              transformOrigin: 'center center',
            },
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'power3.out',
            },
            '+=0.3'
          );

          // Zoom out towards viewer and vanish
          tl.to(
            line,
            {
              opacity: 0,
              scale: 8, // Makes it fly past the screen
              z: 500,
              filter: 'blur(10px)',
              duration: 2,
              ease: 'power3.inOut',
            },
            '+=1.2'
          );
        } else {
          tl.fromTo(
            line,
            {
              opacity: 0,
              y: 100,
              scale: 0.8,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.5,
              ease: 'power3.out',
            },
            '+=0.3'
          );

          tl.to(
            line,
            {
              opacity: 0,
              y: -100,
              duration: 1.5,
              ease: 'power3.in',
            },
            '+=1.5'
          );
        }
      });
    }
  }
}
