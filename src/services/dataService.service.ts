import { Injectable, Inject } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

import { ApiService } from './api.service'

interface DataObject {
  albumId : number,
  id : number,
  title : string,
  url : string,
  thumbnailUrl : string
}

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(public api : ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Promise<any> {
        return this.api.getDataJson().toPromise().then((data) => {

          console.log('Data ', data);
      return data;
    })
  }
}
