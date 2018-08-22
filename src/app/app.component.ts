import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'universal-ng-select';

  items = ['item1', 'item2', 'item3', 'item4'];

  form: FormGroup;
  model: any

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      input: [null, Validators.required],
    });
  }

}
