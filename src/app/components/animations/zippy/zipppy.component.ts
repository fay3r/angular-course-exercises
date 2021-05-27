import { Component, Input } from '@angular/core';

@Component({
  selector: 'zipppy',
  templateUrl: './zipppy.component.html',
  styleUrls: ['./zipppy.component.css'],
})
export class ZipppyComponent {
  @Input('title') title: string | undefined;
  isExpanded: boolean | undefined;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
