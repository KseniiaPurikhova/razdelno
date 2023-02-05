import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
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
