import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  editable = false;

  enterEditMode() {
    this.editable = true;
  }

  applyChanges() {

    // todo
  }

  cancelEdition() {
    this.editable = false;
    // todo
  }


}
