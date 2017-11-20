import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        // let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        // let routerState: RouterState = this.router.routerState;
        // let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        // console.log(activatedRouteSnapshot);
        // console.log(routerState);
        // console.log(routerStateSnapshot);
        // console.log(routerStateSnapshot.url);
    }

}
