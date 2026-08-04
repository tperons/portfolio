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
}
