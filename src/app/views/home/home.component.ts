import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ParamServiceService } from './../../Services/param-service.service';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy{
	items = [];
	routeSub: Subscription;

	constructor(private router: Router, private _paramservice: ParamServiceService) {

		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
		console.log(snapshot);
	}
	onImgClick(item) {
		window.sessionStorage.setItem('selectedItem', JSON.stringify(item));
		this.router.navigate(['/product']);
	}

	getCurrentRoute() {
		this.routeSub = this._paramservice.currentparamData.subscribe(r => {
			let params = r.slice(r.lastIndexOf('/')+1,r.length);
			console.log('route inside home controller' + params);
			if(params != 'home'){
				this.items = JSON.parse(window.sessionStorage.getItem('allItems'));
				this.items = this.items.filter(obj =>{
					return obj.type == params;
				});
				if(this.items.length ==0){
					this.items = JSON.parse(window.sessionStorage.getItem('allItems'));
				}
			}
		}
		);
	}

	ngOnInit() {
		console.log('inside onit');
		let items = JSON.parse(window.sessionStorage.getItem('allItems'));
		if(items){
			this.items = items;
			this.getCurrentRoute();

		}

	}
	ngOnDestroy() {
		if (this.routeSub) {
			this.routeSub.unsubscribe();
		}
	  }

}


