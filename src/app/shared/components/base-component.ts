import { Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  protected onDestroy$: Subject<void> = new Subject();


  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
