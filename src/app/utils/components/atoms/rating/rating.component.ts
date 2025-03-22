import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule, RatingRateEvent } from 'primeng/rating';

@Component({
  selector: 'atom-rating',
  standalone: true,
  imports: [CommonModule, FormsModule, RatingModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class UtilAtomRatingComponent {
  @Input() rating = 0;
  @Input() maxStars = 5;
  @Input() readOnly = true;
  @Input() isCancelEnabled = false;

  handleOnRate(event: RatingRateEvent): void {
    // eslint-disable-next-line no-console
    console.log(event);
  }
}
