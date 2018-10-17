import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { ParamServiceService } from './Services/param-service.service';



@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private _paramservice : ParamServiceService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }else{
        console.log('Jai bhwani '+evt.url);
        this._paramservice.updateCartData(evt.url);
        let sessionKey = window.sessionStorage.getItem('sessionKey');
        if ((evt.url != '/login') && (!sessionKey)) {
          console.log('Session Key Not Found!!');
          this.router.navigate(['/login']);
        }
        // if(evt.url != '/' && (window.sessionStorage.getItem('SESSION_KEY')) != null){
        //     console.log('Authentication Required');
        // }
      }
      window.scrollTo(0, 0)
    }); 
  }
}
