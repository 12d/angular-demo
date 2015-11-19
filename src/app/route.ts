/**
 * Created by xuweichen on 2015/11/18.
 */
import {About} from 'app/com/about';
import {Welcome} from 'app/com/welcome';
import {Component, bootstrap, provide} from 'angular2/angular2';
import {Router, RouteConfig, Route, ROUTER_PROVIDERS,Location, ROUTER_DIRECTIVES,LocationStrategy, HashLocationStrategy} from 'angular2/router';
@Component({
    selector: 'my-app',
    template: `<h1>Test Page for Me</h1>
              <router-outlet></router-outlet>`,
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/', component: Welcome, name: 'Welcome'}),
    new Route({path: '/welcome', component: Welcome, name: 'Welcome'}),
    new Route({path: '/about', component: About, name: 'About'})
])
export class App {
    //location:Location,
    constructor(){
        //location.go('/about');
    }
}
bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);