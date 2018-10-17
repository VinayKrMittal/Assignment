import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParamServiceService {

  constructor() { }
  private paramData = new BehaviorSubject("");
   currentparamData = this.paramData.asObservable();
   updateCartData(newURL){
     console.log('Url updated');
     this.paramData.next(newURL);
   }
}
