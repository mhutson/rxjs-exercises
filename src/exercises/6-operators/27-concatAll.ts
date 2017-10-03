import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/concatAll';

/*
  Input Observable
  cold('ab-|', {a: cold('a-b--|'), b: cold('-y-z-|')})

  Expected Observable
  cold('a-b---y-z-|')

*/

export const concatAllResult = (obs: Observable<Observable<string>>) => {
  return obs.concatAll();
};