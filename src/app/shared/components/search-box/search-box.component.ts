import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @ViewChild('inputTxt') input!: ElementRef

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  searchInput(): void {
    this.onValue.emit(this.input.nativeElement.value);
  }
}
