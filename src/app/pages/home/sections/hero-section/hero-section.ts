import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';

@Component({
  selector: 'app-hero-section',
  imports: [
    FadeUp
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
}
