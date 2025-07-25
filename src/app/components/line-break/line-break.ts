import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-line-break',
  imports: [],
  templateUrl: './line-break.html',
  styleUrl: './line-break.css'
})
export class LineBreak {
  @Input() isAlt: boolean = false;
}
