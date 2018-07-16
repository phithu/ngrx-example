import {
  Component,
  OnInit
} from '@angular/core';

import * as fromStore from './redux';
import * as fromUser from './redux/user';
import { Store } from '@ngrx/store';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

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

  public isLoadedUser$: Observable<any>;
  public users$: Observable<any>;

  constructor(private store: Store<fromStore.State>) {

  }

  public ngOnInit() {
    this.store.dispatch(new fromUser.LoadingUser(true));
    setTimeout(() => {
      this.isLoadedUser$ = this.store.select(fromUser.getLoadedUsers);
      this.users$ = this.store.select(fromUser.getAllUsers);
    }, 4000);
  }
}
