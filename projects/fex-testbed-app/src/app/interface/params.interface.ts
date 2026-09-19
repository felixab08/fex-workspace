export interface IParams {
  search? : string;
  sort?   : string;
  order?  : string;
  page    : number;
  size    : number;
}

export interface IPagination {
  endIndex:   number;
  lastPage:   number;
  length:     number;
  page:       number;
  size:       number;
  startIndex: number;
}
