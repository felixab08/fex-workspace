import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkParamService {
  _activatedRoute = inject(ActivatedRoute);
  currentPage = toSignal(
    this._activatedRoute.queryParamMap.pipe(
      map((params) => (params.get('page') ? +params.get('page')! : 1)),
      map((page) => (isNaN(page) ? 0 : page)),
    ),
    {
      initialValue: 0,
    },
  );

  currentSize = toSignal(
    this._activatedRoute.queryParamMap.pipe(
      map((params) => (params.get('size') ? +params.get('size')! : 10)),
      map((size) => (isNaN(size) ? 5 : size)),
    ),
    {
      initialValue: 10,
    },
  );
}
