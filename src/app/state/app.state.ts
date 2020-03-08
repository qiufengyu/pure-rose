import {Product} from '../product/product';
import {User} from '../user/user';

export interface State {
  app: AppState;
  user: UserState;
}

export interface AppState {
  hideWelcomePage: boolean;
}

export interface UserState {
  currentUser: User;
}
