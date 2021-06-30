import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-errors',
  templateUrl: './user-errors.component.html',
  styleUrls: ['./user-errors.component.sass']
})
export class UserErrorsComponent {

  @Input() error: string;
  public showFlag: boolean;

  constructor() { }

  showDialog(action: {payload: any, type: string}): void {
    this.error = action.payload;
    this.showFlag = true;
  }

  onCancel(): void {
    this.showFlag = false;
  }

}
