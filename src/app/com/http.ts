/**
 * Created by xuweichen on 2015/11/18.
 */
import {Component, bootstrap} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,RequestOptions} from 'angular2/http';
import {RouteParams} from 'angular2/router'
const REMOTE_URL = 'http://m.ctrip.com/restapi/soa2/10101/json/HotCitySearch'
@Component({
    selector: 'http',
    template: `<h1>Result: </h1><p>{{(list)}}</p>`,
    viewProviders: [HTTP_PROVIDERS]//这个不能少！
})
export class Http {
    constructor(http: Http, params: RouteParams){
        this.cityId = params.get('cityid');
        this.http = http;
        this.fetch(this.cityId);
    }
    fetch(id){
        this.http.post(REMOTE_URL, '{"ext":"","flag":0,"ver":610,"ctyId":"'+id+'","environment":1,"pageIdx":1,"head":{"cid":"09031052410077202011","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null},"contentType":"json"}')
            .map(res => res.json())
            .subscribe(list => this.list = JSON.stringify(list));
    }
}