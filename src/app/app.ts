/**
 * Created by xuweichen on 2015/11/18.
 */
import {About} from 'app/com/about';
import {Welcome} from 'app/com/welcome';
import {Article} from 'app/com/article';
import {Http} from 'app/com/http';
import {Component, bootstrap, provide,bind} from 'angular2/angular2';
import {Router, RouteConfig, Route, ROUTER_PROVIDERS,Location,APP_BASE_HREF,HashLocationStrategy, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';
@Component({
    selector: 'my-app',
    template: `<h1>Test Page for Me</h1>
                <a [router-link]="['About']">About Us</a>|
                <a [router-link]="['Welcome']">Welcome</a> |
<a [router-link]="['Article',{id:110110}]">Article110110</a>|
                <a href="#/article/10120">Article10120</a>|
                <a [router-link]="['Http',{cityid:1}]">Http Demo</a>
                                 <router-outlet></router-outlet>`,
directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({path: '/', component: About}),
    new Route({path: '/welcome', component: Welcome, as: 'Welcome'}),
    new Route({path: '/about', component: About, as: 'About'}),
    new Route({path: '/article/:id', component:Article, as: 'Article'}),
    new Route({path: '/http/:cityid', component:Http, as: 'Http'})
])
export class App {
    //location:Location,
    constructor(){

        //location.go('/about');
    }
}
bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);