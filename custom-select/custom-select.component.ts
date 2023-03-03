import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent {
  @Input() inputLabel: string = '';
  @Input() placeholder: string = '';
  @Input() inputValue: string[] = new Array();
  @Input() isRequired: boolean = true;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  value: string = '';
  showValues = false;
  hasBeenTouched = false;

  handleSelectValueClicked(value: string) {
    this.value = value;
    this.onSelect.emit(this.value);
    this.showValues = false;
  }

}
