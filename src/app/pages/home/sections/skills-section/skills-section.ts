import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';
import {Skill} from './skill.model';

@Component({
  selector: 'app-skills-section',
  imports: [
    FadeUp
  ],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  skills: Skill[] = [
    {name: 'Java', icon: 'bi-cup-hot-fill', iconColor: 'var(--purple)', level: 50},
    {name: 'Spring Boot', icon: 'bi-gear-wide-connected', iconColor: 'var(--purple)', level: 50},
    {name: 'Angular', icon: 'bi-shield-fill-check', iconColor: 'var(--purple)', level: 25},
    {name: 'Git', icon: 'bi-git', iconColor: 'var(--purple)', level: 50},
    {name: 'Docker', icon: 'bi-box-seam-fill', iconColor: 'var(--purple)', level: 50},
    {name: 'SQL', icon: 'bi-database-fill', iconColor: 'var(--purple)', level: 25},
  ];
}
