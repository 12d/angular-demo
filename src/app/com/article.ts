/**
 * Created by xuweichen on 2015/11/18.
 */
import {Component, bootstrap} from 'angular2/angular2';
import {RouteParams} from 'angular2/router'
@Component({
    selector: 'article',
    template: `<h1>Article [{{id}}]</h1>`
})
export class Article {
    constructor(params: RouteParams){
        this.id = params.get('id');
    }
}