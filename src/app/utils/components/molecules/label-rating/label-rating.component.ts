import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Project
import { UtilAtomLabelComponent } from '@app/utils/components/atoms/label/label.component';
import { UtilAtomRatingComponent } from '@app/utils/components/atoms/rating/rating.component';

@Component({
  selector: 'molecule-label-rating',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    UtilAtomLabelComponent,
    UtilAtomRatingComponent,
  ],
  templateUrl: './label-rating.component.html',
  styleUrl: './label-rating.component.css',
})
export class UtilMoleculeLabelRatingComponent {
  // Container Properties
  @Input() container = 'flex items-center gap-2';

  // Label properties
  @Input() labelText = '';
  @Input() labelClasses = '';
  @Input() labelIcon = '';
  @Input() labelIsLeftIcon = false;
  @Input() labelIsRightIcon = false;

  // Rating properties
  @Input() rating = 0;
  @Input() maxStars = 5;
  @Input() readOnly = true;
  @Input() isCancelEnabled = false;
}
