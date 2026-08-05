import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';

@Component({
  selector: 'app-about-section',
  imports: [
    FadeUp
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
}
