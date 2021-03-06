import {Observable} from "rxjs/Observable";

/*
  Input Observable
  cold('-a--b-c--d-e-')
  cold('--|')

  Expected Observable
  cold('---a----c----e-')

*/

export const debounceResult = (obs: Observable<string>, debounce$: Observable<string>) => {
  return obs.debounce(() => debounce$);
};
