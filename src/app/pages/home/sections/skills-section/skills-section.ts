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
    {name: 'Java', icon: 'devicon-java-plain', iconColor: 'var(--purple)', level: 50},
    {name: 'Spring', icon: 'devicon-spring-original', iconColor: 'var(--purple)', level: 50},
    {name: 'Angular', icon: 'devicon-angular-plain', iconColor: 'var(--purple)', level: 25},
    {name: 'Git', icon: 'devicon-git-plain', iconColor: 'var(--purple)', level: 50},
    {name: 'Docker', icon: 'devicon-docker-plain', iconColor: 'var(--purple)', level: 50},
    {name: 'SQL', icon: 'devicon-azuresqldatabase-plain', iconColor: 'var(--purple)', level: 25},
  ];
}
