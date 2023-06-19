import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck, OnInit {
  user: any = { name: 'Sarah' };

  name: string = 'Sarah';

  ngDoCheck(): void {
    console.log('app-root - DoCheck');
  }

  ngOnInit(): void {
    of({ name: 'Tod'}).subscribe(({ name }) => {
      this.user.name = name;
      this.name = name;
    });
  }
}
