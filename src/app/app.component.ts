import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';

  public name = 'Simplilearn';
  public topic = 'Data Binding';
  public image = '/assets/logo.png';
  public value = '';

  onClick() {
    console.log('Thank you for subsribing');
  }
}
