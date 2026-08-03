import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';

@Component({
  selector: 'app-about-section',
  imports: [
    FadeUp
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  currentYear: number = new Date().getFullYear();
  experienceYears: number = Math.max(this.currentYear - 2025, 1);
}
