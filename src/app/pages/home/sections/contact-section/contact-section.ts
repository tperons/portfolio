import {Component} from '@angular/core';
import {FadeUp} from '../../../../shared/directives/fade-up';

@Component({
  selector: 'app-contact-section',
  imports: [
    FadeUp
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  currentYear: number = new Date().getFullYear();
}
