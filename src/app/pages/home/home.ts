import {afterNextRender, Component, inject} from '@angular/core';
import {HeroSection} from './sections/hero-section/hero-section';
import {AboutSection} from './sections/about-section/about-section';
import {SkillsSection} from './sections/skills-section/skills-section';
import {ProjectSection} from './sections/projects-section/project-section';
import {ContactSection} from './sections/contact-section/contact-section';
import {ActiveSectionService} from '../../core/services/active-section';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectSection,
    ContactSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private activeSectionService = inject(ActiveSectionService);

  constructor() {
    afterNextRender(() => {
      const sections = document.querySelectorAll('section[id]');
      this.activeSectionService.observe(sections);
    });
  }
}
