import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';

@Component({
  selector: 'app-hero-section',
  imports: [
    FadeUp
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
}
