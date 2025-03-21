import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Project
import { UtilAtomLabelComponent } from '@app/utils/components/atoms/label/label.component';

@Component({
  selector: 'molecule-label-info-field',
  standalone: true,
  imports: [
    CommonModule,
    // Components
    UtilAtomLabelComponent,
  ],
  templateUrl: './label-info-field.component.html',
  styleUrl: './label-info-field.component.css',
})
export class UtilMoleculeLabelInfoFieldComponent {
  // Container
  @Input() container = 'flex items-center w-auto gap-2';

  // Label properties
  @Input() infoText = '';
  @Input() infoClasses = '';
  @Input() infoIcon = '';
  @Input() infoIsLeftIcon = false;
  @Input() infoIsRightIcon = false;

  // Value properties
  @Input() fieldText = '';
  @Input() fieldClasses = '';
  @Input() fieldIcon = '';
  @Input() fieldIsLeftIcon = false;
  @Input() fieldIsRightIcon = false;
}
