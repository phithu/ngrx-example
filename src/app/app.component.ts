import {
  Component,
  OnInit
} from '@angular/core';

import * as fromStore from './redux';
import * as fromUser from './redux/user';
import { Store } from '@ngrx/store';

const users = [
  {
    id: 1,
    name: 'Nguyen van a'
  },
  {
    id: 2,
    name: 'Nguyen van b'
  },
  {
    id: 3,
    name: 'Nguyen van c'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) {

  }

  public ngOnInit() {
    this.store.dispatch(new fromUser.SetUser(users));

    setTimeout(() => {
      this.store.select(fromStore.getAllUsers).subscribe(value => console.log('vakue', value));
    }, 3000);
  }
}
