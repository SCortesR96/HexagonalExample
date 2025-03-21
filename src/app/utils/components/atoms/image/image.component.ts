import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class UtilAtomImageComponent {
  @Input() src = 'https://img.freepik.com/free-vector/silhouette-alcohol-bottles-isolated_1308-119981.jpg';
  @Input() classes = 'ml-2 mr-4 rounded-full border-round-xl';
}
