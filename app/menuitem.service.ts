import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { MenuItem } from './menuitem';

@Injectable()
export class MenuItemService
{  
	private menuitemsUrl = 'api/menuitems';  // URL to web api
	private headers   = new Headers({'Content-Type': 'application/json'});

 	constructor(private http: Http) { }

	getMenuItems(): Promise<MenuItem[]> 
	{
	    return this.http
	    	.get(this.menuitemsUrl)
	        .toPromise()
	        .then(response => response.json().data as MenuItem[])
	        .catch(this.handleError);
    }

	private handleError(error: any): Promise<any>
	{
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
