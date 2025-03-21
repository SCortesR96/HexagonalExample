import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
})
export class UtilAtomLabelComponent {
  @Input() icon = '';
  @Input() classes = '';
  @Input() text = '';
  @Input() isLeftIcon = false;
  @Input() isRightIcon = false;
}
